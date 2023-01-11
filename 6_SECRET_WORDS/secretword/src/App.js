//react
import {useCallback, useEffect, useState} from 'react';

//CSS
import './App.css';

//data
import { wordsList } from "./data/words";

//Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stage = [
  {id:1, name:"start"},
  {id:2, name:"game"},
  {id:3, name:"end"},
];

function App() {

const [gameStage, setGameStage] = useState(stage[0].name);
const [words] = useState(wordsList)

const [pickedWord, setPickedWord] = useState("");
const [pickedCategory, setPickedCategory] = useState("");
const [letters, setLetters] = useState([]);

const [guessedLetters, setGuessedLetters] = useState([])
const [wrongLetters, setWrongLetters] = useState([])
const [guesses, setGuesses] = useState(3)
const [score, setScore] = useState(0)

const pickWordAndCategory = () => {

  //category
  const categories = Object.keys(words);
  const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
  console.log(category);

  //word
  const word = words[category][Math.floor(Math.random() * words[category].length)]
  console.log(word);

  return [word, category];

}
//inicia o jogo
const startGame = () => {
  //pega categoria e palavra
  const [word, category] = pickWordAndCategory();

  //array de letras
  let wordLetters = word.split("");

  wordLetters = wordLetters.map((l) => l.toLowerCase());
  console.log(wordLetters)

  //inicia os states
  setPickedWord(word);
  setPickedCategory(category);
  setLetters(wordLetters)

  setGameStage(stage[1].name)
}

//processa as letras
const verifyLetter = (letter) => {
  
  const normalizedLetter = letter.toLowerCase();

  //se as letras ja foram utilizadas
  if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
    return;
  }

  console.log(normalizedLetter)
  //adiciona na lista de certas ou erradas
  if(letters.includes(normalizedLetter)){
    setGuessedLetters((atualGuessedLetters) => [
      ...atualGuessedLetters, normalizedLetter
    ])
  }else {
    setGuessedLetters((atualWrongetters) => [
      ...atualWrongetters, normalizedLetter
    ])
  }

}

console.log(guessedLetters)
  console.log(wrongLetters)

//resetar o jogo
const retry = () => {
  setGameStage(stage[0].name)
}

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter} pickedWord={pickedWord} pickedCategory={pickedCategory} letters={letters} guessedLetters={guessedLetters} wrongLetters={wrongLetters} guesses={guesses} score={score}/>}
      {gameStage === 'end' && <GameOver retry={retry} />}
    </div>
  );
}

export default App;

import { useState, useRef } from 'react'
import './Game.css'

const Game = ( {verifyLetter, pickedWord, pickedCategory, letters, guessedLetters, wrongLetters, guesses, score} ) => {

  const [letter, setLetter] = useState("")
  const inputLetterRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letter)
    setLetter("")

    inputLetterRef.current.focus();
  }

  return (
    <div className='game'>
      
      <p className="points"><span>Pontuação: {score}</span></p>

      <h1>Advinhe a palavara: </h1>
      <h3 className='tip'>
          Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativa(s).</p>
      <div className="wordContainer">

        {letters.map((letter, i) => 
          guessedLetters.includes(letter) ? ( <span key={i} className="letter">A</span>) : (<span key={i} className="blankSquare"></span>)
        )}
      </div>

      <div className="letterContainer">
        <p>Tente advinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input type="text"  maxLength='1' name='letter' required onChange={(e) => setLetter(e.target.value)} value={letter} ref={inputLetterRef} />
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongLetterscontainer">
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
        
      </div>
    </div>
  )
}

export default Game
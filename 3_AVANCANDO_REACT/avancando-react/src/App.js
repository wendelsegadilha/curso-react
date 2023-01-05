import { useState } from 'react';
import './App.css';
import Java from './assets/img02.webp'
import CarDetails from './components/CarDetails';
import ChangeMessageState from './components/ChangeMessageState';
import ConditionalRender from './components/ConditionalRender';
import Container from './components/Container';
import ExecutionFunction from './components/ExecutionFunction';
import Fragmentos from './components/Fragmentos';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import Message from './components/Message';
import ShowUserName from './components/ShowUserName';

function App() {

  const [userName] = useState("Wendel");

  const cars = [
    {id: 1, brand: "KIA", color:"Verde", km:500},
    {id: 2, brand: "GM", color:"Preto", km:15400},
    {id: 3, brand: "Toyota", color:"Amarelo", km:250},
  ];

  const showMessage = () => {
    console.log("Evento no componente PAI");
  }

  const [message, setMessage] = useState();

  const handleMessage = (msg) => {
    setMessage(msg)
  }
  return (
    <div>
      <h1>Avançando com React</h1>
      {/*Imagens da pasta pública*/}
      <div>
        <img src="/img01.png" alt="" />
      </div>
      {/*Imagem como componente*/}
      <div>
        <img src={Java} alt="" />
      </div>
      <div>
        <ManageData />
      </div>
      <div>
        <ListRender />
      </div>
      <div>
        <ConditionalRender />
      </div>
      <div>
        <ShowUserName name={userName}/>
      </div>
      <CarDetails brand={"VW"} km={1600} color="Branco"/>
      <div>
        {cars.map((car) => {
          return <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} />
        })}
      </div>
      <Fragmentos />
      <Container>
        <p>Passando HTML para o componente filho!</p>
      </Container>
      <ExecutionFunction myFunction={showMessage} />
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
    </div>
  );
}

export default App;

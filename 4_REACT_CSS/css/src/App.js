import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {

  const admin = true;

  return (
    <div className="App">
      <h1>CSS com React</h1>
      <MyComponent />
      <p>Texto do APP.js</p>
      <p style={{color:"red", padding:"25px", background:"blue"}}>CSS inline</p>
      <p style={admin ? ({background:"green", color:"black"}) : ({background:"red"})}>Administrador</p>
      <Title />
    </div>
  );
}

export default App;

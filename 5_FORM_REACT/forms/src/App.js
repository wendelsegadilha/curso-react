import './App.css';
import Form from './components/Form';

function App() {

  return (
    <div className="App">
      <Form user={{nome:"Wendel", email:"wendelsegadilha99@gmail.com", role:"author"}}/>
    </div>
  );
}

export default App;

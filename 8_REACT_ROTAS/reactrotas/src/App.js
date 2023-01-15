import './App.css';

//1 - config do react router dom
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Pages
import Home from './pages/Home';
import About from './pages/About'

function App() {
  return (
    <div className="App">
     <h1>Cabeçalho da Página</h1>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

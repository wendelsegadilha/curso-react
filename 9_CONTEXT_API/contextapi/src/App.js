import './App.css';

import {BrowserRouter, Route, Routes} from  'react-router-dom'
import PaginaOne from './pages/PaginaOne';
import PaginaTwo from './pages/PaginaTwo';
import PaginaThree from './pages/PaginaThree';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
          <h1>Cabeçalho da Página</h1>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/one' element={<PaginaOne />} />
              <Route path='/two' element={<PaginaTwo />} />
              <Route path='/three' element={<PaginaThree />} />
            </Routes>
          </BrowserRouter>
          <p></p>
    </div>
  );
}

export default App;

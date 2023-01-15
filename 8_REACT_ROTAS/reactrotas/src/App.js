import './App.css';

//1 - config do react router dom
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

//components
import Navbar from './components/Navbar';


//Pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import SearchForm from './components/SearchForm';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
     <h1>Cabeçalho da Página</h1>
     <BrowserRouter>
      <Navbar />
      <SearchForm />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* 8 - serach form */}
        //rota dinamica
        <Route path='/products/:id' element={<Product />} />
        //6 - nested Routes
        <Route path='/products/:id/info' element={<Info />} />
        {/* 9 -serach  */}
        <Route path='/search' element={<Search />}/>
        {/* 10  - redirect */}
        <Route path='/company' element={<Navigate to="/about" />}/>        //7- erro 404
        <Route path='*' element={<NotFound />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

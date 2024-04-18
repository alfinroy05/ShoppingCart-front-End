import logo from './logo.svg';
import './App.css';
import Add from './ShoppingCart/Add';
import Search from './ShoppingCart/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './ShoppingCart/View';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Add/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/view' element={<View/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

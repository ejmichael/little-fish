import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar/> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </div> 
    </Router>
    
  );
}

export default App;

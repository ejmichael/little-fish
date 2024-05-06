import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<div>Home page</div>}/>
        </Routes>
      </div> 
    </Router>
    
  );
}

export default App;

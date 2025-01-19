import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Info from './Pages/Info';
import HomePage from './Pages/HomePage';



function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

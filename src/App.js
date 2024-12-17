import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Home';






function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

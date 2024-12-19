import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Home';
import Course from './Pages/course';
import Team from './Pages/Team';
import Aboutus from './Pages/Aboutus';






function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<Aboutus />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

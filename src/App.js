// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Fizyka from './components/Fizyka';
import Matematyka from './components/Matematyka';
import Informatyka from './components/Informatyka';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
      <Router>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fizyka" element={<Fizyka />} />
            <Route path="/matematyka" element={<Matematyka />} />
            <Route path="/informatyka" element={<Informatyka />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
      <div className="footer">
        <p>© 2021-2023 Babylon Library Project      KXH-RESEARCH all rights reserved</p>
      </div>
    </div>
  );
}

export default App;

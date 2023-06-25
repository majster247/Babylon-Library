// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Fizyka from './components/Fizyka';
import Matematyka from './components/Matematyka';
import Informatyka from './components/Informatyka';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fizyka" element={<Fizyka />} />
          <Route path="/matematyka" element={<Matematyka />} />
          <Route path="/informatyka" element={<Informatyka />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

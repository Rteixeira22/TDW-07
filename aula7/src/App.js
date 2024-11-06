import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Ex1 from './Ex1/ex1';
import Ex2 from './Ex2/ex2';
import Navbar from './navbar';
import { TodoProvider } from './contexct'; // Certifique-se de que o caminho está correto

function App() {
  return (
    <TodoProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="Ex1" element={<Ex1 />} />
          <Route path="Ex2" element={<Ex2 />} />
        </Routes>
      </Router>
    </TodoProvider>
  );
}

export default App;
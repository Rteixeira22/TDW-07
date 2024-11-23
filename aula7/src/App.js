import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Ex1 from './Ex1/ex1';
import Ex2 from './Ex2/ex2';
import Ex3 from './Ex3/ex3';
import Ex4 from './Ex4/ex4';
import Ex5 from './Ex5/ex5';
import Navbar from './navbar';
import { TodoProvider } from './contexct';


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
          <Route path="Ex3" element={<Ex3 />} />
          <Route path="Ex4" element={<Ex4 />} />
          <Route path="Ex5" element={<Ex5 />} />
        </Routes>
      </Router>
    </TodoProvider>
  );
}

export default App;
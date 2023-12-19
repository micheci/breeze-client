import React from 'react';
import Home from './Views/Home';
import Chat from './Views/Chat';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Adhd from './Views/Adhd';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/adhd" element={<Adhd />}/>
      </Routes>
    </Router>
  );
}

export default App;

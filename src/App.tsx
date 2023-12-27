import React from 'react';
import Home from './Views/Home';
import Chat from './Views/Chat';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Adhd from './Views/Adhd';
import Anxiety from './Views/Anxiety';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/adhd" element={<Adhd />}/>
        <Route path="/anxiety" element={<Anxiety />}/>

      </Routes>
    </Router>
  );
}

export default App;

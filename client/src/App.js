import React from 'react';

import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

import Home from "./pages/home";
import SignUp from './pages/signup';
import Login from './pages/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

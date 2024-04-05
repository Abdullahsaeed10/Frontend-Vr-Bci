import './App.css'
// import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';
import Login from '../src/pages/LoginPage/Login';
import Signup from './pages/SignupPage/SignUp';
import Verification from '../src/pages/VerificationPage/verification';
import NotFoundPage from "../src/pages/404Page/404";

// import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

// import React from 'react';
// import { BrowserRouter as Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify" element={<Verification />} />
        <Route path="*" element={<NotFoundPage />} />
        {/* Add other routes here */}
      </Routes>
    
  </BrowserRouter>
  );
}

export default App;

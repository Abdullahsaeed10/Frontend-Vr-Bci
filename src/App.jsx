import './App.css'
// import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';
import Login from '../src/pages/LoginPage/Login';
import Signup from './pages/SignupPage/SignUp';
import Verification from '../src/pages/VerificationPage/verification';
import NotFoundPage from "../src/pages/404Page/404";
import ForgotPassword from "../src/pages/ForgotPasswordPage/ForgotPassword"
import Home from "../src/pages/HomePage/Home"
import AboutUs from "../src/pages/AboutUsPage/AboutUs";
import ContactUs from "../src/pages/ContactUSPage/ContactUs"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import React from 'react';
// import { BrowserRouter as Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify" element={<Verification />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* Add other routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

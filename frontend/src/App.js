import logo from './logo.svg';
import './App.css';
import React from "react";
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from './components/Dashboard'; 

function App() {
  return (
    <Router>
      <nav>
        <Link to ="/login">Login</Link>
      </nav>
      <nav>
        <Link to ="/register">Register</Link>
      </nav>
      <Routes>
        <Route path = '/login' element ={<Login/>} />
        <Route path = '/register'  element = {<Register/>}/>
        <Route path="/dashboard/:email" element={<Dashboard />} /> 
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';

const Home = () =>{
  return <h2>Welcome to the home page</h2>
}

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="*" element={<Navigate to="/"/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/logout" element={<Logout/>}/>
      </Routes>
    </Router>
  )
}

export default App;
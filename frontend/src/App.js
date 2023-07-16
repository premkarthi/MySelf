import React, { useEffect, useState } from 'react';
import './App.css'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'
import SocialMedia from './components/SocialMedia';
import Mail from './components/Mail';
import HorizontalScroll from 'react-scroll-horizontal';
import DarkModeToggle from "react-dark-mode-toggle";
import { ToastContainer } from 'react-toastify';




function App() {
  const child  = { width: `100em`, height: `100%`}
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  },[isDarkMode])

  return (
    <div style={{height:'100vh', width:'100vw'}}>
     <HorizontalScroll >
        <Home name="Premnath" profile="Software Engineer" style={child}  />
        <About style={child} />
        <Experience style={child}  />
        <Contact style={child} />
       
      </HorizontalScroll>
      <SocialMedia style={child} />
        <Mail style={child} />

      <div className='darkMode'>
        <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={80}
            />
      <ToastContainer position="top-center"></ToastContainer>
      </div>
    </div>
  )
}

export default App;
import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav.js";
import Intro from "./components/Intro/Intro.js";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Reviews from "./components/Reviews/Reviews"
// import logo from './logo.svg';

function App() {

  return (
    <div className="App" >
      <Nav />
      <Intro />
      <Projects />
      <Reviews />
      <Skills />
      <Contact />

    </div >

    // <header className="App-header">
    //         <img src={logo} className="App-logo" alt="logo" />
    //         <p>
    //           Edit <code>src/App.js</code> and save to reload.
    //         </p>
    //         <a
    //           className="App-link"
    //           href="https://reactjs.org"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Learn React
    //         </a>
    //       </header> 

  );
}

export default App;
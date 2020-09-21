import React from 'react';
import Nav from "./Nav.js";
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" >
      <Nav
        render={(on, toggle) => (
          <div className="navbar">
            <div className="brand-title">Patience Deaton</div>
            <a href='/#'className='toggle-btn' onClick={toggle}>
              <span className='bar'></span>
              <span className='bar'></span>
              <span className='bar'></span>
            </a>
            <div className="navbar-links">
              {on &&
                <ul>
                  <li>
                    <a href="/#" target="_blank" rel="link"> Home</a>
                  </li>
                  <li>
                    <a href="/#" target="_blank" rel="link"> About</a>
                  </li>
                  <li>
                    <a href="/#" target="_blank" rel="link"> Projects</a>
                  </li>
                  <li>
                    <a href="/#" target="_blank" rel="link"> Contact</a>
                  </li>
                </ul>
              }
            </div>
          </div>
        )} />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    </div >
  );
}


export default App;


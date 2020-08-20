import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';


const App = () => {
  return (
    <>
      <NavBar />
      <div>
        This is the app content
      </div>
    </>
  )
}

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-title">
        Geoffrey Witherington-Perkins
      </div>
      <div className="navbar-buttons-wrapper">
        <div className="navbar-button">
          Portfolio
        </div>
        <div className="navbar-button">
          About
        </div>
        <div className="navbar-button">
          Contact
        </div>
      </div>
    </div>
  )
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

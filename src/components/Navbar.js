import React from 'react';
import {Tooltip} from 'react-tippy';
import Button from './Button';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        GEOFFREY WITHERINGTON-PERKINS
      </div>
      <div className="navbar-buttons-wrapper">
        <Button
          type="navbar"
          text="PORTFOLIO"
          link="#portfolio"
        />
        <Button
          type="navbar"
          text="ABOUT"
          link="#about"
        />
        <Button
          type="navbar"
          text="CONTACT"
          link="#contact"
        />
      </div>
    </nav>
  )
}

export default NavBar;
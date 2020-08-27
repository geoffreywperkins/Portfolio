import './index.scss';
import 'react-tippy/dist/tippy.css'
import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import {Tooltip} from 'react-tippy';


const App = () => {
  return (
    <>
      <NavBar />
      <Section
        header={true}
      >
        <div className="header-content-wrapper">
          <img 
            src={require("./assets/profile.jpg")}
            alt="Profile"
            className="profile-pic"
          />
          <div className="header">
            <h1 className="header-title">
              GEOFFREY WITHERINGTON-PERKINS
            </h1>
            <div className="divider-custom">
              <div className="divider-custom-line"></div>
              <svg className="star-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
                <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
              </svg>
              <div className="divider-custom-line"></div>
            </div>
            <p className="subheader">SOFTWARE ENGINEER</p>
          </div>
        </div>
      </Section>
    </>
  )
}

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        GEOFFREY WITHERINGTON-PERKINS
      </div>
      <div className="navbar-buttons-wrapper">
        <Tooltip
          title="Coming soon!"
          position="bottom"
        >
          <div className="navbar-button">
            PORTFOLIO
          </div>
        </Tooltip>
        <Tooltip
          title="Coming soon!"
          position="bottom"
        >
          <div className="navbar-button">
            ABOUT
          </div>
        </Tooltip>
        <Tooltip
          title="Coming soon!"
          position="bottom"
        >
          <div className="navbar-button">
            CONTACT
          </div>
        </Tooltip>
      </div>
    </nav>
  )
}

const Section = ({header=false, children}) => {
  return (
    <div className={classnames('content-section', {'header-section': header})}>
      {children}
    </div>
  )
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

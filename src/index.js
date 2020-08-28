import './index.scss';
import 'react-tippy/dist/tippy.css'
import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import {Tooltip} from 'react-tippy';


const projects = require('./projects.json');

const App = () => {
  return (
    <>
      <NavBar />
      <Section
        header
      >
        <div className="header-content-wrapper">
          <img 
            src={require("./assets/profile.jpg")}
            alt="Profile"
            className="profile-pic"
          />
          <div className="header">
            <h1 className="section-title">
              GEOFFREY WITHERINGTON-PERKINS
            </h1>
            <Divider />
            <p className="subheader">SOFTWARE ENGINEER</p>
          </div>
        </div>
      </Section>
      <Section>
        <div className="content-wrapper">
          <h2 className="section-title">
            PORTFOLIO
          </h2>
          <Divider />
          <div className="card-container">
            {projects.map((project) => (   // File that holds all the buttons 
              <Card
                {...project}
              />
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}

const Card = ({name, repo, url}) => {
  return (
    <div className="card">
      <img
        className="card-img hover"
        src={require(`./assets/${name.toLowerCase().split(' ').join('-')}.png`)}  // Image filenames are based on the name in projects.json
      />
      <div className="card-content">
        <h3 className="card-title">
          {name.toUpperCase()}
        </h3>
        <Button
          text="GITHUB"
          link={repo}
        />
        {url && (
          <Button
            text="WEBSITE"
            link={url}
          />
        )}
      </div>
    </div>
  )
}

const Button = ({text, link}) => {
  return (
    <div className="btn-wrapper">
      <a
        className="btn btn-primary"
        href={link}
      >
        {text}
      </a>
    </div>
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

const Divider = () => {
  return (
    <div className="divider-custom">
      <div className="divider-custom-line"></div>
      <svg className="star-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
      </svg>
      <div className="divider-custom-line"></div>
    </div>
  );
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

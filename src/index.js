import './index.scss';
import 'react-tippy/dist/tippy.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
import NavBar from './components/Navbar';
import Section from './components/Section';
import Divider from './components/Divider';


const projects = require('./projects.json');

const App = () => {
  return (
    <>
      <NavBar />
      <Section
        sectionId="header"
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
            <p className="section-text">SOFTWARE ENGINEER</p>
          </div>
        </div>
      </Section>
      <Section
        sectionId="portfolio"
      >
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
      <Section
        sectionId="about"
      >
        <div className="content-wrapper">
          <h2 className="section-title">
            ABOUT
          </h2>
          <Divider />
          <div className="about-text-wrapper">
            <p className="section-text about-text">
              I'm a hard-working Software Engineer looking for my next job. After graduating from Michigan State University with a Bachelor's degree in Computer Science, I worked at Lingco Language Labs doing full-stack development for 3 months.<br /><br />
              I love doing side projects in my free time, and I've recently been looking into Distributed Systems. So far, I've been watching tech talks by Tim Berglund, Senior Director of Developer Experience at Confluent. I'm planning on diving into additional reading materials and projects!<br /><br />
              I'm looking for a company with a collaborative work environment that can offer mentorship to younger developers. I'm also interested in a company that highly values and encourages employees to grow their knowledge and skill set.<br /><br />
              Outside of Computer Science, my interests include rock climbing, and baking sourdough, foccacia, and pies!
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

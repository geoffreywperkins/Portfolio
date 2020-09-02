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
              Outside of Computer Science, my interests include rock climbing, and baking foccacia and sourdough!
            </p>
          </div>
        </div>
      </Section>
      <Section
        sectionId="contact"
      >
        <div className="content-wrapper">
          <div className="contact-info-wrapper">
            <div className="contact-info-col">
              <h4 className="contact-title">
                EMAIL
              </h4>
              geoffrey.w.perkins@gmail.com
            </div>
            <div className="contact-info-col">
              <h4 className="contact-title">
                LINKS
              </h4>
              <div className="circle-btn-row">
                <a className="circle-btn" href="https://www.linkedin.com/in/geoffrey-w-perkins/">
                  <svg class="svg-inline--fa fa-linkedin-in fa-w-14 fa-fw" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                </a>
                <a className="circle-btn" href="https://github.com/geoffreywperkins">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>
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

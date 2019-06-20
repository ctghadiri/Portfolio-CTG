import React from 'react';
import './App.css';
import Nav from './components/nav';
import Section from './components/section';
import Parallax from './components/parallax';
import ProjImage from './components/projects/image';
import ProjDetails from './components/projects/details';

function App() {
  return (
    <div>
      <div className="header">

        <Nav />
      </div>
      <Section name="About Me" id="about-me">
        <p>banana</p>
      </Section>
      {/* Photo by Fezbot2000 on Unsplash */}
      <Parallax image="/assets/images/beach.jpg"></Parallax>
      <Section name="Skills" id="skills">

      </Section>
      <Section name="Education" id="education">

      </Section>
      <Section name="Experience" id="experience">

      </Section>
      <Section name="Projects" id="projects">
      <p>banana</p>
      </Section>
      <Section name="Contact" id="contact">

      </Section>
        <div className="row section">
          <ProjImage projImg="/assets/images/TruckTrackerLogo.png"></ProjImage>
          <ProjDetails></ProjDetails>
        </div>
        <div className="row section">
          <ProjDetails></ProjDetails>
          <ProjImage projImg="/assets/images/Liri-Bot.png"></ProjImage>
        </div>
        <div className="row section">
          <ProjImage></ProjImage>
          <ProjDetails></ProjDetails>
        </div>
    </div>
  );
}

export default App;

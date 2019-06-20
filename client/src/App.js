import React from 'react';
import './App.css';
import Nav from './components/nav';
import Section from './components/section';
import Parallax from './components/parallax';
import ProjImg from './components/projects/image';
import ProjDetails from './components/projects/details';

function App() {
  return (
    <div>
      <div className="header">

        <Nav />
      </div>
      <Section name="About Me" id="about-me">

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
        <div className="row section">
          <ProjImg projImg="/assets/images/TruckTrackerLogo.png"></ProjImg>
          <ProjDetails></ProjDetails>
        </div>
        <div className="row section">
          <ProjDetails></ProjDetails>
          <ProjImg projImg="/assets/images/Liri-Bot.png"></ProjImg>
        </div>
        <div className="row section">
          <ProjImg></ProjImg>
          <ProjDetails></ProjDetails>
        </div>
      </Section>
      <Section name="Contact" id="contact">

      </Section>
    </div>
  );
}

export default App;

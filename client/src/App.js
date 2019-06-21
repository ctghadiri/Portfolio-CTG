import React from 'react';
import './App.css';
import Nav from './components/nav';
import Section from './components/section';
import Parallax from './components/parallax';
import ProjImage from './components/projects/image';
import ProjDetails from './components/projects/details';
import Footer from './components/footer';

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
              <ProjImage projImg="/assets/images/TruckTrackerLogo.png"></ProjImage>
              <ProjDetails projTitle="Truck Tracker">
              <p></p>
              </ProjDetails>
          </div>
          <div className="row section">
              <ProjDetails projTitle="Liri-Bot">
              <p></p>
              </ProjDetails>
              <ProjImage projImg="/assets/images/Liri-Bot.png"></ProjImage>
          </div>
          <div className="row section">
              <ProjImage></ProjImage>
              <ProjDetails projTitle="">
              <p></p>
              </ProjDetails>
          </div>
      </Section>
      <Section name="Contact" id="contact">

      </Section>
      <Footer></Footer>
    </div>
  );
}

export default App;

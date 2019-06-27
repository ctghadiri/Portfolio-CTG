import React from 'react';
import './App.css';
import Nav from './components/nav';
import Section from './components/section';
import Parallax from './components/parallax';
import ProjImage from './components/projects/image';
import ProjDetails from './components/projects/details';
import Footer from './components/footer';
import Contact from './components/contact/main';

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
        <div className="row section"></div>
        <div className="row section"></div>
      </Section>
      <Parallax image="/assets/images/beach.jpg"></Parallax>
      <Section name="Education" id="education">
        <div className="row section">
          <h6>University of Califonia, Berkeley Extension — Full Stack Coding Bootcamp</h6>
          <p>2019</p>
        </div>
        <div className="row section">
          <h6>University of Califonia, Davis — B.S. Economics</h6>
          <p>2012</p>
        </div>
      </Section>
      <Parallax image="/assets/images/beach.jpg"></Parallax>
      <Section name="Experience" id="experience">
        <div className="row section">
          <h6>JPMorgan Chase, San Jose, CA — Relationship Banker</h6>
          <ul>
            <li>Troubleshoot client issues to resolve escalations in a timely manner.</li>
            <li>Actively leverage current technologies to educate customers and recommend solutions that fit their needs.</li>
            <li>Coach team members to develop sales opportunities and refer clients to designated business partners to meet sales goals.</li>
          </ul>
        </div>
        <div className="row section right-align">
          <h6>Homesuite, Palo Alto, CA — Landlord and Partnership Account Manager</h6>
          <ul>
            <li>Responsible for seamlessly and quickly managing multi-channel interactions with current and prospective landlord partners.</li>
            <li>Provided technical support and troubleshoot problems that arose with existing accounts.</li>
          </ul>
        </div>
        <div className="row section">
         <h6>GageIn, Mountain View, CA — Sales Associate</h6>
         <ul>
            <li>Conducted SaaS product demos for small to mid-market end-users via GoToMeeting and join.me.</li>
            <li>Worked in a close-knit team brainstorming and implementing sales and marketing strategies</li>
          </ul>
        </div>
        <div className="row section right-align">
         <h6>Maple Press, San Jose, CA — Account Manager</h6>
         <ul>
            <li>Managed key relationships with existing customers, prospects, and partners.</li>
            <li>Prepared and presented marketing reports by collecting, analyzing, and summarizing sales data.</li>
          </ul>
        </div>
      </Section>
      <Parallax image="/assets/images/beach.jpg"></Parallax>
      <Section name="Projects" id="projects">
          <div className="row section">
              <ProjImage projImg="/assets/images/TruckTrackerLogo.png" link="https://github.com/Mel-Marsollier/WhatTheTruck-FE"></ProjImage>
              <ProjDetails projTitle="Truck Tracker">
              <ul>
                <li>Collaborated with a team on creating web app to display nearby food truck information.</li>
                <li>Built restful API to manage and display food trucks.</li>
                <li>Designed the database schema and  validations.</li>
                <li>Used Axios calls to pull information to display on React based frontend.</li>
                <li>Designed user experience including CSS, Bootstrap, and React.</li>
              </ul>
              </ProjDetails>
          </div>
          <div className="row section">
              <ProjDetails projTitle="Liri-Bot">
              <ul>
                <li>Built CLI app that is a language interpretation and recognition interface that will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.</li>
                <li>Used Axios calls to pull information from respective API’s.</li>
                <li>Applied moment.js to provide time conversions for API pulls and responses.</li>
              </ul>
              </ProjDetails>
              <ProjImage projImg="/assets/images/Liri-Bot.png" link="https://github.com/ctghadiri/liri-node-app"></ProjImage>
          </div>
          <div className="row section">
              <ProjImage></ProjImage>
              <ProjDetails projTitle="">
              <p></p>
              </ProjDetails>
          </div>
      </Section>
      <Parallax image="/assets/images/beach.jpg"></Parallax>
      <Section name="Contact" id="contact">
        <Contact></Contact>
      </Section>
      <Footer></Footer>
    </div>
  );
}

export default App;

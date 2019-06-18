import React from 'react';
import './App.css';
import Nav from './components/nav';
import Section from './components/section';

function App() {
  return (
    <div>
      <div class="header">

        <Nav />
      </div>
      <div class="container">

        <Section name="About Me" id="about-me">

        </Section>
        <Section name="Skills" id="skills">

        </Section>
        <Section name="Education" id="education">

        </Section>
        <Section name="Experience" id="experience">

        </Section>
        <Section name="Projects" id="projects">

        </Section>
        <Section name="Contact" id="contact">

        </Section>
      </div>
    </div>
  );
}

export default App;

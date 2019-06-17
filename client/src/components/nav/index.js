import React from 'react';

const Nav = () => {
    return (
        <div class="row">
        {/* <div class="col s12 m9 l10">
          <div id="about-me" class="section scrollspy">
            <p>About Me </p>
          </div>
    
          <div id="skills" class="section scrollspy">
            <p>Skills </p>
          </div>
    
          <div id="education" class="section scrollspy">
            <p>Education </p>
          </div>

          <div id="experience" class="section scrollspy">
            <p>Experience </p>
          </div>

          <div id="projects" class="section scrollspy">
            <p>Projects </p>
          </div>

          <div id="contact" class="section scrollspy">
            <a href="/contact"><p>Contact </p></a>
          </div>
        </div> */}
        <a href="#" class="sidenav-trigger" data-target="mobile-links">
          <i class="material-icons">menu</i>
        </a>
        <div class="col hide-on-small-only m3 l2">
          <ul class="section table-of-contents">
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <ul class="sidenav" id="mobile-links">
          <li><a href="#about-me">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    )
}

export default Nav
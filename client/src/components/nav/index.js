import React from 'react';
import './style.css';

const Nav = () => {
    return (
      <div class="row nav-margin pinned nav-background">
        <a href="#" class="sidenav-trigger hide-on-large-only" data-target="mobile-links">
          <i class="material-icons">menu</i>
        </a>
        <div class="col hide-on-med-and-down m3 l2">
          <ul class="section table-of-contents">
            <li><a href="#about-me" className="grey-text text-lighten-5">About Me</a></li>
            <li><a href="#skills" className="grey-text text-lighten-5">Skills</a></li>
            <li><a href="#education" className="grey-text text-lighten-5">Education</a></li>
            <li><a href="#experience" className="grey-text text-lighten-5">Experience</a></li>
            <li><a href="#projects" className="grey-text text-lighten-5">Projects</a></li>
            <li><a href="#contact" className="grey-text text-lighten-5">Contact</a></li>
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
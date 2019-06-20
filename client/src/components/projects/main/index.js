import React from 'react';
import Section from '../../section';
import ProjImage from '../image';
import ProjDetails from '../details';

const Projects = () => {
    return (
        <Section name="Projects" id="projects">
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
        </Section>
    )
}

export default Projects;
import React from 'react';
import './style.css';

const Section = (props) => {
    return (
        <div className="teal accent-2 section margin">
            <div className="container scrollspy" id={props.id}>
                {/* <div className="row scrollspy" id={props.id}> */}
                    <h1 className="section-text">{props.name}</h1>
                {/* </div> */}
                {props.children}
            </div>
        </div>
    )
}

export default Section;
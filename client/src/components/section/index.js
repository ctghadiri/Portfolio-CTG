import React from 'react';
import './style.css';

const Section = (props) => {
    return (
        <div className="teal accent-2 section margin">
            <div className="container scrollspy" id={props.id}>
                {/* <div className="row scrollspy" id={props.id}> */}
                    <h1 className="orange-text text-darken-3">{props.name}</h1>
                {/* </div> */}
                {props.children}
            </div>
        </div>
    )
}

export default Section;
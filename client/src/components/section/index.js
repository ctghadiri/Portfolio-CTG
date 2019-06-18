import React from 'react';

const Section = (props) => {
    return (
        <div className="container">
            <div className="row scrollspy" id={props.id}>
                <h1>{props.name}</h1>
            </div>
        </div>
    )
}

export default Section;
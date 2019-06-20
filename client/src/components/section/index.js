import React from 'react';

const Section = (props) => {
    return (
        <div className="container scrollspy" id={props.id}>
            {/* <div className="row scrollspy" id={props.id}> */}
                <h1>{props.name}</h1>
            {/* </div> */}
            {props.children}
        </div>
    )
}

export default Section;
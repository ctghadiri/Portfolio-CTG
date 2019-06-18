import React from 'react';

const Section = (props) => {
    return (
        <div class="row scrollspy" id={props.id}>
            <h1>{props.name}</h1>
        </div>
    )
}

export default Section;
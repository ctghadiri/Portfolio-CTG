import React from 'react';
import { checkPropTypes } from 'prop-types';

const Section = (props) => {
    return (
        <div class="row scrollspy" id={props.id}>
            <h1>{props.name}</h1>
        </div>
    )
}

export default Section;
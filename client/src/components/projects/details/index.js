import React from 'react';

const ProjDetails = (props) => {
    return (
        <div className="col s12 l8">
            <h2>{props.projTitle}</h2>
            {props.children}
        </div>
    )
}

export default ProjDetails;
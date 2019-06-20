import React from 'react';

const ProjImage = (props) => {
    return (
        <div className="col s12 l4">
            <img src={props.projImg} alt="" className="responsive-img project-img"/>
        </div>
    )
}

export default ProjImage;
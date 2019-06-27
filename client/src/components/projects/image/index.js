import React from 'react';
import './style.css';

const ProjImage = (props) => {
    return (
        <div className="col s12 l4">
            <a href={props.link} target="_blank">
                <img src={props.projImg} alt="" className="responsive-img project-img"/>
            </a>
        </div>
    )
}

export default ProjImage;
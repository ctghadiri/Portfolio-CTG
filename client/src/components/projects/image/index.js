import React from 'react';

const ProjImg = (props) => {
    return (
        <div className="col s12 l4">
            <img src={props.proj-img} className="responsive-img">
            </img>
        </div>
    )
}

export default ProjImg;
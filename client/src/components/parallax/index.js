import React from 'react'

const Parallax = (props) => {
    return (
        <div class="parallax-container">
            <div class="parallax">
                <img src={props.image} alt="Beach" class="responsive-img"></img>
            </div>
        </div>
    )
}

export default Parallax;
import React from 'react';
import './stylesheets/Amenities.css';

const Amenities = () => {
    let the_texts = {
        hd: "We are on a mission to change the laundromat experience",
        sm_info: "Here's what we offer:",

    }
    return (
        <div className="amenities">
            <div className="amenities__blank">

            </div>
            <div className="amenities__container">
                
                <div className="amenities__head">
                    {the_texts.hd}
                    <p className="para">{the_texts.sm_info}</p>

                </div>
                <div className="amenities__body">
                    
                </div>

            </div>
            
        </div>
    )
}

export default Amenities;

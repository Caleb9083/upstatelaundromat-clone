import React from 'react';
import './stylesheets/Amenities.css';
import wifi from '../images/wifi-icon.png';
import ac from '../images/snowflake-icon.png';
import chair from '../images/chair_icon.png';
import cafe_ from '../images/cafe_table_icon.png';
import charg_ from '../images/charger_icon.png';
import hdtv from '../images/hdtv_icon.png';
import mach_ from '../images/washing_machine_icon.png';
import kids_ from '../images/ipad_icon.png';


const Amenities = () => {
    let the_texts = {
        hd: "We are on a mission to change the laundromat experience",
        sm_info: "Here's what we offer:",
        wifi: "FREE WIFI",
        air: "AIR CONDITIONING",
        comf: "COMFORTABLE SEATING",
        cafe: "CAFE TABLE",
        charg: "CHARGING STATIONS",
        tv: `5 HD 55" TVS`,
        mach: `35 HI TECH MACHINES`,
        kids: `KID'S ZONE WITH IPADS`,
        site: "ON-SITE ATTENDANT",
        sec: "SECURITY CAMERAS"

    }
    return (
        <div className="amenities">
            <div className="amenities__blank">

            </div>
            <div className="amenities__container">
                
                <div className="amenities__head">
                    <p className="paragraph paragraph-bg">{the_texts.hd}</p>
                    <p className="paragraph paragraph-sm">{the_texts.sm_info}</p>

                </div>
                <div className="amenities__body">
                    <div className="amenities__body_container">
                        <div className="amenities__item">
                            <div className="amenities__img">
                                <img src={wifi} alt="" />

                            </div>
                            <div className="amenities__info">{the_texts.wifi}</div>
                        </div>
                        <div className="amenities__item">
                            <div className="amenities__img">
                                <img src={ ac } alt="" />

                            </div>
                            <div className="amenities__info">{the_texts.air}</div>
                        </div>
                        <div className="amenities__item">
                            <div className="amenities__img">
                                <img src={chair} alt="" />

                            </div>
                            <div className="amenities__info">{the_texts.comf}</div>
                        </div>
                        <div className="amenities__item">
                            <div className="amenities__img">
                                <img src={cafe_} alt="" />

                            </div>
                            <div className="amenities__info">{the_texts.cafe}</div>
                        </div>
                        <div className="amenities__item">
                            <div className="amenities__img">
                                <img src={charg_} alt="" />

                            </div>
                            <div className="amenities__info">{the_texts.charg}</div>
                        </div>    
                    </div>
                    <div className="amenities__body_container">
                       < div className="amenities__item">
                            <div className="amenities__img">
                                <img src={wifi} alt="" />

                            </div>
                            <div className="amenities__info">{the_texts.wifi}</div>
                        </div> 

                    </div>
                    
                </div>

            </div>
            
        </div>
    )
}

export default Amenities;

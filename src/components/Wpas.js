import React from 'react'
import './stylesheets/Wpas.css';
import google from '../images/google_sm.png';
import Star from './Star';


const Wpas = () => {
    let Objs = {
            pers1: {
                name: "COLONEL GRIFFIN",
                ratings: 2,
                date: "Jun 15, 2021",
                message: "Love going there. The vibe is chill"
            },
            pers2: {
                name: 'DEMETRIUS EDWARDS',
                ratings: 5,
                date: "Jun 7, 2021",
                message: ""
            },
            pers3: {
                name: "MARCELLA FLOYD",
                ratings: 2,
                date: "May 21, 2021",
                message: "This is the cleanest &most comfortable laundry mat ever I mean everyone is so friendly and so willing to help never will I ever do my laundry anywhere else"
            },
            pers4: {
                name: "SAUL GOMEZ CRUZ ",
                ratings: 2,
                date: "May 16, 2021",
                message: ""
            }
    }
    return (
        <div className="wpas">
            <div className="wpas__container">
                <div className="wpas__head">
                    <p>{"What People Are Saying"} </p>
                </div>
                <div className="wpas__testimony_container">
                    <div className="wpas__testimonyTop_container">
                        <div className="wpas__name_container">
                            {Objs.pers1.name}
                        </div>
                        <div className="wpas__rating_container">
                        <Star color="yellow"/><Star/><Star/><Star/><Star/>
                        </div>
                        <div className="wpas__acc_img_container">
                            <img src={google} alt="" />
                        </div>
                    </div>  
                    <div className="wpas__date_container">
                        <p>{Objs.pers1.date}</p>
                    </div>
                    <div className="wpas__message_container">
                        <p>{Objs.pers1.message}</p>
                    </div>  
                </div>
                <div className="wpas__testimony_container">
                    <div className="wpas__testimonyTop_container">
                        <div className="wpas__name_container">
                            {Objs.pers2.name}
                        </div>
                        <div className="wpas__rating_container">
                        <Star color="yellow"/><Star/><Star/><Star/><Star/>
                        </div>
                        <div className="wpas__acc_img_container">
                            <img src={google} alt="" />
                        </div>
                    </div>  
                    <div className="wpas__date_container">
                        <p>{Objs.pers2.date}</p>
                    </div>
                    <div className="wpas__message_container">
                        <p>{Objs.pers2.message}</p>
                    </div>  
                </div>
                <div className="wpas__testimony_container">
                    <div className="wpas__testimonyTop_container">
                        <div className="wpas__name_container">
                            {Objs.pers3.name}
                        </div>
                        <div className="wpas__rating_container">
                        <Star color="yellow"/><Star/><Star/><Star/><Star/>
                        </div>
                        <div className="wpas__acc_img_container">
                            <img src={google} alt="" />
                        </div>
                    </div>  
                    <div className="wpas__date_container">
                        <p>{Objs.pers3.date}</p>
                    </div>
                    <div className="wpas__message_container">
                        <p>{Objs.pers3.message}</p>
                    </div>  
                </div>
                <div className="wpas__testimony_container">
                    <div className="wpas__testimonyTop_container">
                        <div className="wpas__name_container">
                            {Objs.pers4.name}
                        </div>
                        <div className="wpas__rating_container">
                        <Star color="yellow"/><Star/><Star/><Star/><Star/>
                        </div>
                        <div className="wpas__acc_img_container">
                            <img src={google} alt="" />
                        </div>
                    </div>  
                    <div className="wpas__date_container">
                        <p>{Objs.pers4.date}</p>
                    </div>
                    <div className="wpas__message_container">
                        <p>{Objs.pers4.message}</p>
                    </div>  
                </div>
                <div className="wpas__testimony_container container-small">
                    <span>Powered by <a href="https://toptube.coms">OsamTechnologies</a></span>
                </div>
            </div>
            
        </div>
    )
}

export default Wpas;

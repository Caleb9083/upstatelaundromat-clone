import React from 'react'
import './stylesheets/Prefooter.css'
import map_ from '../images/map.PNG'

const Frefooter = () => {
    return (
        <div className="prefooter">
            <div className="prefooter__container">
                <div className="prefooter__left">
                    <div className="prefooter__left_container">
                        <div className="prefooter__left_head">
                            {"Contact"}
                        </div>
                        <div className="prefooter__left_fb">
                            {"Facebook"}
                        </div>
                        <div className="prefooter__left_location">
                            {"location".toUpperCase()}
                        </div>
                        <div className="prefooter__left_loc_direction">
                            {"2600 Anderson Rd Greenville, SC 29611"}
                        </div>
                        <div className="prefooter__left_hours">
                            {"hours".toUpperCase()}
                        </div>
                        <div className="prefooter__left_hours_time">
                            {"Open every day from 8am-10pm (Last wash at 9pm)"}
                        </div>
                        <div className="prefooter__left_email_head">
                            {"email".toUpperCase()}
                        </div>
                        <div className="prefooter__left_email">
                            {"info@upstatelaundromat.com"}
                        </div>
                    </div>
                </div>
                <div className="prefooter__right">
                    <img src={map_} alt="" />
                </div>

            </div>
            
        </div>
    )
}

export default Frefooter

import React from 'react'
import './stylesheets/Footer.css'
import u_logo from '../images/u-logo.png'

const Footer = () => {
    let texts = {top:`info@upstatelaundromat.com  |  2600 Anderson Rd,
                     Greenville SC 29611 © 2018 Upstate Laundromat. All 
                     rights reserved. Site by Knapsack.`
    }
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__head">
                    {texts.top}
                </div>
                <div className="footer__logo">
                    <img src={u_logo} alt="" />
                </div>
            </div>
            
        </div>
    )
}

export default Footer

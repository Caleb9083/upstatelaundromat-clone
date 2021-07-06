import React from 'react'
import './stylesheets/Navbar.css';
import home_ico from '../images/home_icon1.png';
import logo from '../images/logo.png';


const Navbar = () => {
    let the_texts= { section1: {
        serv : "services".toUpperCase(),
        amen : "amenities".toUpperCase(),
        tes : "testimonials".toUpperCase(),
        faq : "faq".toUpperCase(),
        con : "contact".toUpperCase()
    } }
    return (
        <div className="Navbar" >
            <div className="Navbar__container">
                <div className="Navbar__real">
                    <div className="Navbar__real__items Navbar__real__items-small">
                        <img src={ home_ico } alt=""/>
                    </div>
                    <div className="Navbar__real__items">
                        {the_texts.section1.serv}
                    </div>
                    <div className="Navbar__real__items">
                        {the_texts.section1.amen}
                    </div>
                    <div className="Navbar__real__items Navbar__real__items-big">
                    <img height="150" width="190" src={ logo } alt=""/>
                    </div>
                    <div className="Navbar__real__items">
                        {the_texts.section1.tes}
                    </div>
                    <div className="Navbar__real__items">
                        {the_texts.section1.faq}
                    </div>
                    <div className="Navbar__real__items">
                        {the_texts.section1.con}
                    </div>
                </div>
                <div className="Navbar__hero">

                </div>

            </div>
            
        </div>
    )
}

export default Navbar;

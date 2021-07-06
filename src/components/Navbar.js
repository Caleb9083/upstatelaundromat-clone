import React from 'react'
import './stylesheets/Navbar.css';
import home_ico from '../images/home_icon1.png';
import logo from '../images/logo.png';


const Navbar = () => {
    let the_texts= { 
         section1: {
            serv : "services".toUpperCase(),
            amen : "amenities".toUpperCase(),
            tes : "testimonials".toUpperCase(),
            faq : "faq".toUpperCase(),
            con : "contact".toUpperCase()
        },
        section2: {
            sm_head : "MODERN & UPSCALE LAUNDROMAT",
            bg_head_1 : "A Better Place to",
            bg_head_2 : "do Your Laundry"

        }
 }
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
                <div className="Navbar__hero__container">
                    <div className="Navbar__hero_section1">
                        {the_texts.section2.sm_head}
                    </div>
                    <div className="Navbar__hero_section2">
                    {the_texts.section2.bg_head_1}
                    </div>
                    <div className="Navbar__hero_section2">
                    {the_texts.section2.bg_head_2}
                    </div>
                    <div className="Navbar__hero_section3">
                     {" view location".toUpperCase()}
                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default Navbar;

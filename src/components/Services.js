import React from 'react';
import './stylesheets/Services.css';
import coin from '../images/coin_and_coinless.png';
import folded from '../images/folded-shirt-icon.png';
import loyalty from '../images/loyalty-card-icon.png';

const Services = () => {
    let texts = {
        info1:"Our environmentally friendly Huebsch® machines use less water and dry faster so you are done fast! You can pay with coins, the Upstate Laundromat loyalty card, Visa, or MasterCard.",
        info2:"Don’t waste valuable time doing your own laundry. Let us handle it for you! Offered 7 days a week, same day or next day available. We will notify you when your laundry is done via text.",
        info3: "Use your Upstate Laundromat personal loyalty card to earn special discounts over time. Make sure to register your card by clicking here or by downloading the Fascard Mobile app."
    }
    return (
        <div className="services">
            <div className="services__container">
                <div className="services__items">
                    <div className="services__items_img">
                        <img height="250" width="350" src={coin} alt="" />
                    </div>
                    <div className="services__items_info">
                        <h4>{"COIN & COINLESS MACHINES"}</h4>
                        <p>{texts.info1}</p>
                    </div>

                </div>
                <div className="services__items">
                <div className="services__items_img">
                        <img height="250" width="350" src={folded} alt="" />
                    </div>
                    <div className="services__items_info">
                        <h4>{"FLUFF & FOLD SERVICE AVAILABLE"}</h4>
                        <p>{texts.info2}</p>
                        
                    </div>
                    
                </div>
                <div className="services__items">
                <div className="services__items_img">
                        <img height="245" width="350" src={loyalty} alt="" />
                    </div>
                    
                    <div className="services__items_info">
                        <h4>{"LOYALTY DISCOUNTS"}</h4>
                        <p>{texts.info3}</p>
                    </div>
                    
                </div>

            </div>
            
        </div>
    )
}

export default Services

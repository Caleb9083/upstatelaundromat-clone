import React from 'react';
import './stylesheets/FAQ.css';

const FAQ = () => {
    let text = {
        head: "Frequently Asked Questions",
        q1: "What are your hours?",
        q2: "What is the last wash time?",
        q3: "Is coin-less laundry really coin-less?",
        q4: "How do I get a new laundry card?",
        q5: "How do I add money to the card?",
        q6: "Is my laundry card reusable/reloadable?",
        q7: "How do I register my laundry card?",
        q8: "Why is the front load washer often a better choice?",
        q9: "Can I wash my pillows in a front load washer?",
        q10: "Can I wash a down comforter?",
        q11: "How do I add time to the dryers?",
        q12: "What items should NOT be put in the dryer?",

    }
    return (
        <div className="faq">
            <div className="faq__head">{text.head}</div>
            <div className="faq__container">
                <div className="faq__item_container">
                    <div className="faq__question">
                        <span className="faq__qq"><strong>+</strong>{text.q1}</span>
                    </div>
                    <div className="faq__question">
                        <span className="faq__qq"><strong>+</strong>{text.q2}</span>
                    </div>
                    <div className="faq__question">
                        <span className="faq__qq"><strong>+</strong>{text.q3}</span>
                    </div>
                    <div className="faq__question">
                        <span className="faq__qq"><strong>+</strong>{text.q4}</span>
                    </div>
                    <div className="faq__question">
                        <span className="faq__qq"><strong>+</strong>{text.q5}</span>
                    </div>
                    <div className="faq__question">
                        <span className="faq__qq"><strong>+</strong>{text.q6}</span>
                    </div>
                </div>
                <div className="faq__item_container">
                    <div className="faq__question">
                        <span className="faq__qq"><strong>+</strong>{text.q7}</span>
                    </div>
                    <div className="faq__question">
                        <span className="faq__qq"><strong>+</strong>{text.q8}</span>
                    </div>
                    <div className="faq__question">
                        <span className="faq__qq"><strong>+</strong>{text.q9}</span>
                    </div>
                    <div className="faq__question">
                        <span className="faq__qq"><strong>+</strong>{text.q10}</span>
                    </div>
                    <div className="faq__question">
                        <span className="faq__qq"><strong>+</strong>{text.q11}</span>
                    </div>
                    <div className="faq__question">
                        <span className="faq__qq"><strong>+</strong>{text.q12}</span>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default FAQ

import './features.css';
import React from 'react';
import icon1 from '../../images/analytics.png';
import icon2 from '../../images/globe.png';
import icon3 from '../../images/target.png';
import icon4 from '../../images/call.png';
import icon5 from '../../images/settings.png';
import icon6 from '../../images/accounting.png';
import icon7 from '../../images/coding.png';


const Features = () => {
    return (
        <div className="features" id="features">
            <div className="features-header">
                <h1 className="text-center">We are awesome for you!</h1>
                <h4 className="text-center py-3">A Powerful platform for fast and easy monetization of your traffic!</h4>
            </div>
            <ul className="features-list d-flex">
                <li className="single-item">
                    <div className="icon">
                        <img src={icon1} alt="icon-1" />
                    </div>
                    <h5 className="my-3 icon-title">Real-time<br />stats</h5>
                    <div className="speech-bubble">
                        <p>Accurate data at your fingertips.</p>
                    </div>
                </li>
                <li className="single-item">
                    <div className="icon icon2">
                        <img src={icon2} alt="icon-1" />
                    </div>
                    <h5 className="my-3 icon-title">Global<br />coverage</h5>
                    <div className="speech-bubble2">
                        <p>50+ countries to make money in.</p>
                    </div>
                </li>
                <li className="single-item">
                    <div className="icon icon3">
                        <img src={icon3} alt="icon-1" />
                    </div>
                    <h5 className="my-3 icon-title">Smart<br />targeting</h5>
                    <div className="speech-bubble3">
                        <p>Smart targeting and redirects to maximize your ROI.</p>
                    </div>
                </li>
                <li className="single-item">
                    <div className="icon icon4">
                        <img src={icon4} alt="icon-1" />
                    </div>
                    <h5 className="my-3 icon-title">24/7<br />support</h5>
                    <div className="speech-bubble4">
                        <p>24/7 dedicated account management in your language.</p>
                    </div>
                </li>
                <li className="single-item">
                    <div className="icon icon5">
                        <img src={icon5} alt="icon-1" />
                    </div>
                    <h5 className="my-3 icon-title">Easy<br />integration</h5>
                    <div className="speech-bubble4">
                        <p>Easy integration with Cake, AllAffiliatePro and more.</p>
                    </div>
                </li>
                <li className="single-item">
                    <div className="icon icon6">
                        <img src={icon6} alt="icon-1" />
                    </div>
                    <h5 className="my-3 icon-title">Fast<br />payment</h5>
                    <div className="speech-bubble4">
                        <p>Timely and flexible payment options.</p>
                    </div>
                </li>
                <li className="single-item">
                    <div className="icon">
                        <img src={icon7} alt="icon-1" />
                    </div>
                    <h5 className="my-3 icon-title">User-friendly<br />interface</h5>
                    <div className="speech-bubble4">
                        <p>Easy-to-use interface: get your data fast!</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Features;
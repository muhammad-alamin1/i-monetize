import './about.css';
import React from 'react';
import ipad from '../../images/ipad-pic.png';

const About = () => {
    return (
        <div className="about-section container" id="about-us">
            <h1 className="text-center">About Us</h1>
            <h4 className="py-3 text-center">We are a team of professionals devoted to simple and quick monetization of your traffic!</h4>
            <div className="row">
                <div className="col-6 col-lg-6 col-md-6 about-img">
                    <img src={ipad} alt="about-img" className="img-fluid img-thumbnail border-0" />
                </div>
                <div className="col-6  col-lg-6 col-md-6 about-text ">
                    <p>We are providing online marketers with ready solutions to bridge the gap between them and the advertisers they target. With a dedicated optimization team reviewing traffic and offers in real-time, we ensure our clients enjoy the highest RPMs possible.</p>
                    <p>Www.imonetizeit.com revolutionizes the global redirect practices. Our proprietary geo-targeting system is one of the leading monetization technology in the world, monetizing 100% of your traffic, till the very last impression.</p>
                    <p>Isn't it time to start getting more from your online content? We've got all the monetization solutions you need to make it!</p>
                </div>
            </div>
        </div>
    );
};

export default About;
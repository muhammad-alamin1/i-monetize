import './header.css';
import React from 'react';
import BgVideo from '../../video/bg_video.mp4';


const Header = () => {
    return (
        <div className="header">
            <video id="videoTag" autoPlay loop muted poster="../../images/poster_web.jpg">
                <source src={BgVideo} type='video/mp4' />
            </video>
            <button className="sign-up-btn">START NOW!</button>
        </div>
    );
};

export default Header;
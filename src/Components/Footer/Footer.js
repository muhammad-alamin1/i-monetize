import './footer.css';
import React from 'react';
import footerLogo from '../../../src/images/footer-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const today = new Date();
    return (
        <div className="footer container ">
            <div className="row">
                <div className=" col-md-3 footer-logo mb-5 text-center">
                    <img src={footerLogo} alt="footer-logo" />
                </div>
                <div className=" col-md-6 text-center terms-condition">
                    <ul className="d-flex">
                        <li><a href="#" target="_blank">Privacy & Policy</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Affiliate Terms and Conditions</a></li>
                    </ul>
                    <div>
                        <p>&copy; {today.getFullYear()} iMonetizeIt</p>
                    </div>
                </div>
                <div className=" col-md-3 follow">
                    <ul className="d-flex">
                        <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
import './contact.css';
import ReCAPTCHA from "react-google-recaptcha";
import React from 'react';
import Recapcha from '../Recapcha/Recapcha';

const Contact = () => {
    return (
        <div className="contact-us" id="contact-us">
            <div className="contact-from mb-5">
                <div className="mt-5">
                    <h1 className="text-center contact-header">Contact Us</h1>
                    <h5 className="text-center my-4">and we will get back to you as fast as possible</h5>
                </div>
                <form action="POST" id="contact-form">
                    <input type="text" className="form-control" placeholder="Name*" required /><br />
                    <input type="email" className="form-control" placeholder="Email*" required /><br />
                    <textarea name="" className="form-control" placeholder="Message*" required></textarea>
                    <div className="row">
                        <div className="col-6">
                            <input type="submit" value="Submit" className="my-5" id="submit-btn" />
                        </div>
                        <div className="col-6 recaptcha">
                            <Recapcha />
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Contact;
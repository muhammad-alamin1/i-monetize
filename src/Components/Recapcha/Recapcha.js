import ReCAPTCHA from "react-google-recaptcha";
import React from 'react';

const Recapcha = () => {
    function onChange(value) {
        console.log("Captcha value:", value);
    }
    return (
        <div>
            <ReCAPTCHA
                sitekey="Your client site key"
                onChange={onChange}
            />
        </div>
    );
};

export default Recapcha;

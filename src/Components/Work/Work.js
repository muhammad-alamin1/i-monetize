import './work.css';
import React from 'react';
import distribution from '../../images/how-work-icon-1.png';
import optimization from '../../images/how-work-icon-2.png';
import promotional from '../../images/how-work-icon-3 (1).png';
import Performance from '../../images/how-work-icon-4.png';

const Work = () => {
    return (
        <div className="work">
            <h1 className="text-center">How it works</h1>
            <h4 className="text-center">Simple and quick traffic monetization at any scale!</h4>
            <div className="row my-5">
                <div className="col-6 d-flex">
                    <div className="distribution-img">
                        <img src={distribution} alt="distribution" />
                    </div>
                    <div className="distribution ms-2">
                        <h5>Distribution</h5>
                        <h6>Rapidly and efficiently distribute your campaign's availability</h6>
                    </div>
                </div>
                <div className="col-6 d-flex">
                    <div >
                        <img src={optimization} alt="optimization" />
                    </div>
                    <div className="optimization ms-2">
                        <h5>Optimization</h5>
                        <h6>Optimize with in-depth data mining and analysis</h6>
                    </div>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-6 d-flex">
                    <div >
                        <img src={promotional} alt="Performance" />
                    </div>
                    <div className="Performance ms-2">
                        <h5>Promotional links</h5>
                        <h6>Easy-to-use wizard for generating promotional links</h6>
                    </div>
                </div>
                <div className="col-6 d-flex">
                    <div >
                        <img src={Performance} alt="promotional" />
                    </div>
                    <div className="promotional ms-2">
                        <h5>Performance</h5>
                        <h6>Accurately forecast your business performance</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
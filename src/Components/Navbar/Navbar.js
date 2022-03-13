import './navbar.css';
import React from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <nav className="nav-menu">
                <div className="row">
                    <div className="logo col-3">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="navbar  col-6">
                        <ul className="d-flex">
                            <li className=" nav-item"><a href="/" className="nav-link text-light ">how it works</a></li>
                            <li className=" nav-item"><a href="#features" className="nav-link text-light">features</a></li>
                            <li className=" nav-item"><a href="#about-us" className="nav-link text-light">about us</a></li>
                            <li className=" nav-item"><a href="#contact-us" className="nav-link text-light">contact us</a></li>
                        </ul>
                    </div>
                    <div className="authentication col-3">
                        <div className="">
                            <button className="btn btn-outline-success p-2 me-3"><Link to="/login" style={{textDecoration:'none', color: '#fff'}}>LOG IN</Link></button>
                            <button className="btn btn-outline-success p-2 "><Link to="/register" style={{textDecoration:'none', color: '#fff'}}>SIGN UP</Link></button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
import './register.css';
import React from 'react';
import Navbar from '../Navbar/Navbar';

const Register = () => {
    return (
        <div>
            <Navbar />
            <br />
            <br />
            <br />
            <div className="card card-body" id="form" >
                <h3>Register Now</h3>
                <form action="#" method="post">
                    <div class="form-group my-3">
                        <label for="">Full Name</label>
                        <input type="text" name="name" id="" class="form-control" placeholder="Full name" aria-describedby="helpId" required />
                    </div>
                    <div class="form-group my-3">
                        <label for="">Username (Unique)</label>
                        <input type="text" name="username" id="" class="form-control" placeholder="Username" aria-describedby="helpId" required />
                    </div>
                    <div class="form-group my-3">
                        <label for="">Email</label>
                        <input type="email" name="email" id="" class="form-control" placeholder="E-mail" aria-describedby="helpId" required />
                    </div>
                    <div class="form-group my-3">
                        <label for="">Password</label>
                        <input type="password" name="password" id="" class="form-control" placeholder="Strong password" aria-describedby="helpId" required />
                    </div>
                    <div class="form-group my-3">
                        <label for="">Confirm Password</label>
                        <input type="password" name="confirmPassword" id="" class="form-control" placeholder="Confirm password" aria-describedby="helpId" required />
                    </div>
                    <input type="submit" value="Submit" className="btn btn-outline-success" />
                </form>
            </div>
        </div>
    );
};

export default Register;
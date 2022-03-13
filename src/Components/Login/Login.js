import React from 'react'
import Navbar from '../Navbar/Navbar'

export default function Login() {
    return (
        <div>
            <Navbar />
            <br />
            <br />
            <br />
            <div className="card card-body" id="form" >
                <h3>Login your account </h3>
                <form action="#" method="post">
                    <div class="form-group my-3">
                        <label for="">Email</label>
                        <input type="email" name="email" id="" class="form-control" placeholder="E-mail" aria-describedby="helpId" required />
                    </div>
                    <div class="form-group my-3">
                        <label for="">Password</label>
                        <input type="password" name="password" id="" class="form-control" placeholder="Password" aria-describedby="helpId" required />
                    </div>
                    <input type="submit" value="Sign In" className="btn btn-outline-success" />
                </form>
            </div>
        </div>
    )
}

// RegisterForm.jsx

import React from "react";
import { useHistory } from "react-router-dom";
import '../css/Home.css'
import '../css/register.css';

const RegisterForm = () => {
    const history = useHistory();

    const handleLogin = () => {
        history.push("/");
    };

    return (
        <div className="signup-form">
            <form>
                <h2>Register</h2>
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" name="first_name" placeholder="First Name" required />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" name="last_name" placeholder="Last Name" required />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" name="email" placeholder="Email" required />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" name="password" placeholder="Password" required />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" required />
                </div>
                <div className="form-group">
                    <label className="form-check-label">
                        <input type="checkbox" required /> I accept the
                        <a href="#"> Terms of Use</a> &amp;
                        <a href="#"> Privacy Policy</a>
                    </label>
                </div>
                <div className="form-group">
                    <button className="btn btn-lg btn-block" onClick={handleLogin}>Register Now</button>
                </div>
            </form>
            <div className="text-center">
                Already have an account?
                <span onClick={handleLogin}> Sign in</span>
            </div>
        </div>
    );
};

export default RegisterForm;

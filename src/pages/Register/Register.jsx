import React from 'react'
import './Register.css'

function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Ispace</h3>
                    <span className="loginDesc">
                        connect with friends and the world around you on Ispace.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="text" placeholder="Username" className="loginInput" />
                        <input type="Email" placeholder="Email" className="loginInput" />
                        <input type="Password"placeholder="Password"  className="loginInput" />
                        <input type="Password" placeholder="Confirm Password" className="loginInput" />
                        <button className="loginButton">Sign In</button>
                        <button className="loginRegisterButton">Log into Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register

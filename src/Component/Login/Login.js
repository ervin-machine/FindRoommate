import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import insta from '../../Assets/insta.png'
import facebook from '../../Assets/facebook.png'
import twitter from '../../Assets/twitter.png'
import google from '../../Assets/google.png'
function Login() {
    return (
        <div className="login">
            <div className="login-header">
                <h1 className="login-header-text">Login</h1>
                <p className="login-header-subtext">Login to existing account or create a new one.</p>
            </div>
            <div className="login-form">
                <form>
                    <input className="login-input" type="text" name="Email" placeholder="Email address" />
                    <br />
                    <input className="login-input" type="password" name="Password" placeholder="Password" />
                    <br />
                    <Link to="/home"><input className="login-button" type="submit" value="SIGN IN" /></Link>
                </form>
                <p className="login-forgot">FORGOT PASSWORD?</p>
                <hr className="login-line" />
            </div>
        <div className="footer-background">
            <div className="login-footer">
                <p className="login-footer-text">OR LOGIN WITH</p>
                <div className="social-login">
                    <img className="social-image" src={facebook} alt="facebook" />
                    <img className="social-image" src={google} alt="google" />
                    <img className="social-image" src={twitter} alt="twitter" />
                    <img className="social-image" src={insta} alt="insta" />
                </div>
                <Link to="/register"><p className="login-footer-register">REGISTER AN ACCOUNT</p></Link>
                <hr className="login-line" />
            </div>
            
        </div>
            
        </div>
    )
}

export default Login

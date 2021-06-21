import React from 'react'
import {Link} from 'react-router-dom'
import './Register.css'
import Avatar  from '../../Assets/avatar.png'
function Register() {
    return (
        <div className="register">
            <div className="register-header">
                <h1 className="register-header-text">Basic Details</h1>
                <center>
                <img className="register-avatar" src={Avatar} alt="avatar" />
                </center>
            </div>
            <div className="register-form">
                <form>
                    <input className="register-input" type="text" name="Name" placeholder="Name" />
                    <br />
                    <input className="register-input" type="text" name="Age" placeholder="Age" />
                    <br />
                    <input className="register-input-budget-from" type="text" name="Budget from" placeholder="Budget from" />
                    <input className="register-input-budget-to" type="text" name="Budget to" placeholder="Budget to" />
                    <br />
                    <input className="register-input" type="text" name="Email" placeholder="Email address" />
                    <br />
                    <input className="register-input" type="text" name="Phone number" placeholder="Phone Number" />
                    <br />
                    <input className="register-input" type="password" name="Password" placeholder="Password" />
                    <br />
                    <input className="register-input" type="password" name="Password" placeholder="Repeat password" />
                    <br />
                    <Link to="/home"><input className="register-button" type="submit" value="REGISTER" /></Link>
                </form>
            </div>
        </div>
    )
}

export default Register

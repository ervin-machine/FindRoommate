import React from 'react'
import './Confirm.css'
function Confirm() {
    return (
        <div className="confirm">
            <div className="confirm-header">
                <h1 className="confirm-header-text">Confirm account</h1>
                <p className="confirm-header-subtext">We have send you a 4-digit code on the phone number. Please check your messages.</p>
            </div>
            <div className="confirm-form">
                <form>
                    <input className="confirm-input" type="text" name="number" placeholder="*" />
                    <input className="confirm-input" type="text" name="number" placeholder="*" />
                    <input className="confirm-input" type="text" name="number" placeholder="*" />
                    <input className="confirm-input" type="text" name="number" placeholder="*" />
                    <br />
                    <a href="/home"><input className="confirm-button" type="submit" value="CONFIRM" /></a>
                </form>
                <p className="confirm-resend">RESEND ME A CODE</p>
                <hr className="confirm-line" />
            </div>
        </div>
    )
}

export default Confirm

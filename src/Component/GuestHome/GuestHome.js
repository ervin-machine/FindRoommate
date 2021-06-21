import React from 'react'
import './GuestHome.css'


export default function GuestHome() {
    return (
        <div className="guesthome">
            <div className="gh-head">
                <div className="gh-white"></div>
                <p className="gh-head-text">Finding a Roommate has never been 
                <br />
                so easy! You are only few steps away 
                <br /> 
                from your perfect home
                </p>
            </div>
            <div className="gh-footer">
                <a href="/login"><button className="gh-looking">I'M LOOKING FOR A ROOM</button></a>
                <br />
                <button className="gh-owner">I'M A FLAT OWNER</button>
            </div>
            
        </div>
    )
}

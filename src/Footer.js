import React from 'react'
import './Footer.css'
import phone from './accessories/call.png'
import email from './accessories/email.png'
import twitter from './accessories/twitter.png'
import facebook from './accessories/facebook.png'
import instagram from './accessories/instagram.png'

function Footer() {
    return (
        <>
            <div className="main-footer">
                <div className="footer">
                    <div className="div1">
                        <div className="subdiv1">
                            <h1>OUR ADDRESS</h1>
                        </div>
                        <div className="subdiv2">
                            <p>Cogent Web Services</p>
                            <p>Office No. 715 Jay Ambe Commercial Area, New </p>
                            <p>Kondli, Mayur Vihar, New Delhi, Delhi 11009</p>
                        </div>
                    </div>
                    <div className="div2">
                        <div className="subdiv2 1">
                            <p><img src= {phone} alt="" /> : +91-7080855524</p>
                            <button className="call-now">Call Now</button>
                        </div>
                        <div className="subdiv2 2">
                            <p><img src={email} alt="" />: support@cogentglobal.com</p>
                            <button className="call-now">Mail Now</button>
                        </div>
                    </div>
                </div>
                <div className="media">
                    <img src= {twitter} alt="" />
                    <img src= {facebook} alt="" />
                    <img src= {instagram} alt="" />
                </div>
            </div>
        </>
    )
}

export default Footer
import React from 'react'
import image from './accessories/cgt.png'
import phone from './accessories/call.png'
import email from './accessories/email.png'

import './Navbar.css'
function Navbar() {
    return (
        <>
            <div className='navigation'>
                <div className='container'>
                    <img src={image} alt="" className='logo1'/>
                    <div className="container2">
                        <div className="circle-phone">
                            <img src={phone} alt="" />
                            <p className='sm'>:+91-7080855524</p>
                        </div>
                        <div className="circle-phone">
                            <img src={email} alt="" />
                            <p className='sm'>: support@cogentglobal.com </p>
                        </div>
                        <button className="contact sm">Contact Us</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
import React from 'react'
import './Update.css'
import graphic from './accessories/graphic.png'
import email from './accessories/email.png'

function Update() {
  return (
    <div className='update'>
        <div className="graphics">
            <img src={graphic} alt="" />
        </div>
        <div className="suscribe">
          <div className="suscribe-now">
              <h3>Suscribe Now</h3>
          </div>
          <div className="get-update">
            <h1>Get every single update you will get</h1>
          </div>
          <div className="suscribe-input">
            <img src={email} alt="" />
            <input type="text" placeholder='Enter email address' />
            <button className="suscribe">Suscribe now</button>
          </div>
        </div>
    </div>
  )
}

export default Update
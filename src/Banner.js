import React from 'react'
import comp from './accessories/comp.png'

import './Students.css'
function Banner() {
  return (
    <>
    <div className="container-banner">
      <div className='banner'>
        <img src={comp} alt="" />
        <div className="img2"></div>
      </div>
    </div>
    </>
  )
}

export default Banner
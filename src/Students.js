import React from 'react'
import './Students.css'
import multimedia from './accessories/Multimedia.png'
import badge from './accessories/badge.png'
import rupee from './accessories/Rupee.png'
import suitcase from './accessories/suticase.png'


function Students() {
  return (
    <>
    
    <div className='student'>

      <div className="first-col">
        <p>Achieve more</p>
        <h1>Creating Student
          successes with Our
          services</h1>
      </div>
      <div className="second-col">
        <div class="grid-container">
          <div class="grid-item1">
            <div className="l1">
              <img src={multimedia} alt="" />
            </div>
            <div className="i1">
              <h4>Access Anywhere</h4>
              <p>Take your skills up Anywhere on your mobility tools</p>
            </div>
          </div>
          <div class="grid-item2">
          <div className="l1">
              <img src={suitcase} alt="" />
            </div>
            <div className="i1">
              <h4>Verified Course</h4>
              <p>Give your career a boost with verified cources</p>
            </div>
          </div>
          <div class="grid-item3">
          <div className="l1">
              <img src={rupee} alt="" />
            </div>
            <div className="i1">
              <h4>Low Cost</h4>
              <p>Learn without limitations, all courses are in affordable cost</p>
            </div>
          </div>
          <div class="grid-item4">
          <div className="l1">
              <img src={badge} alt="" />
            </div>
            <div className="i1">
              <h4>Expert Instructions</h4>
              <p>Find the right instructor for you with the experienced person.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Students
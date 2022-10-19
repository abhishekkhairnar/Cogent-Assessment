import React from 'react'
import './Top.css'
import flutter from './accessories/flutter.png'
import star from './accessories/star.png'
import char from './accessories/char.png'

function Top() {
  return (
    <>
        <div className="top-courses">
        <h1>Top Courses</h1>
        <p>Start your learning journey</p>
        </div>
        <div className="flutter">
            <div className="card">
                <div className="card-img">
                    <img src={flutter} alt="" />
                    <h3>Complete Flutter app development</h3>
                    <h4>Development</h4>
                    <div className="buttons">
                        <p className='star-button'>4.7<img src={star} alt="" /></p>
                        <p className='pop'>Popular</p>
                    </div>
                </div>

            </div>
            <div className="card-info">
                <div className="cinfo">
                    <h1>Flutter Training 25 days Crash Course</h1>
                    <p>More than 150 students joined and get benifitted</p>
                    <h4>Daily 1 hour training with the efficient trianner</h4>
                    <h2>Amount : $ 150</h2>
                    <div className="buttons-2">
                        <button className="enroll">Enroll Now</button>
                        <button className="view-syllabus">View Syllabus</button>
                        <img src={char} alt="" />
                    </div>
                </div>
                <div className="g2">

                </div>
            </div>
        </div>
    </>
  )
}

export default Top
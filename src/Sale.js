import React from 'react'
import './Sale.css'
import dancing from './accessories/Success.png'
function Sale() {
    return (
        <>
            <div className="main">
                <div className="sale">
                    <div className="first-container">
                        <img src={dancing} alt="" />
                    </div>
                    <div className="second-container">
                        <h2>Get Your Flutter Course Now with</h2>
                        <h2 className='yellow'>Low Cost</h2>
                    </div>
                    <div className="third-container">
                        11 : 02 : 45 : 21
                    </div>
                    <div className="fourth-container">
                        Early
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sale
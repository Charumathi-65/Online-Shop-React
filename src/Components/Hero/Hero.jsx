import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.jpeg';

import Stylishgirl from '../Assets/Stylishgirl.jpeg';
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className="hand-hand-icon">
            <p>New</p>
            <img src={hand_icon} alt=""/>
            </div>
            <p>Collection </p>
            <p>For Everyone</p>
      </div>
      <div className="hero-latest-btn">
        <div>Latest Collection</div>
        
      </div>
</div>
      <div className="hero-right">
       <img src={Stylishgirl} alt=""/>
      </div>
    </div>
  )
}

export default Hero

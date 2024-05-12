import React from 'react'
import './Hero.css'
import Navigation from '../Navigation/Navigation'
import dark_arrow from '../../Assests/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero-container' id='hero'>
        <div className='hero-head'>
          <h1>We ensure better education for a better world</h1>
          <button className='exp-btn'>Explore more<img src={dark_arrow} alt='arrow'/></button>
        </div>
    </div>
  )
}

export default Hero

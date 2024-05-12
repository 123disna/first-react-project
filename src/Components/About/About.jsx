import React from 'react'
import './About.css'
import about from '../../Assests/about.png'
import play_icon from '../../Assests/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about-main-div' id='about'>
        <div className='about-left'>
            <img className='about-icons' src={about} alt='about_png'/>
            <img className='play-icons' src={play_icon} alt='play' onClick={()=>{
              setPlayState(true)}}/>
        </div>
        <div className='about-right'>
            <p className='about-sub-title'>ABOUT UNIVERSITY</p>
            <h2 className='about-main-title'>Nurturing Tomorrow's Leaders Today</h2>
            <p className='about-para1'>Embark on a transformative educational journey with out university's 
                comprehensive educational programs. Our cuttind-edge curriculum is 
                designed to empower students with the knowledge, skills, and experiences 
                needed to excel in the dynamic field of education.</p>
            <p className='about-para1'>With a focus on innovation, hands-on learning and personalized mentorship,
                 our programs prepare aspiring educators to make a meaningful impact in 
                 classrooms, schools, and communities.</p>
            <p className='about-para1'>Whether you aspire to become a teacher, administrator, counselor, or 
                educational leader, our diverse range of programs offers the perfect 
                pathway to achieve your goals and unlock your full potential in shaping 
                the future of education.</p>
        </div>
    </div> 
  )
}

export default About

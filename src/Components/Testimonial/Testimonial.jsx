import React, { useRef } from 'react'
import Headers from '../Headers/Headers'
import next_icon from '../../Assests/next-icon.png'
import back_icon from '../../Assests/back-icon.png'
import user1 from '../../Assests/user-1.png'
import user2 from '../../Assests/user-2.png'
import user3 from '../../Assests/user-3.png'
import user4 from '../../Assests/user-4.png'
import './Testimonial.css'


const Testimonial = () => {
    const slider=useRef();
    let tx=0;
  

    const slideForward=()=>{
       if(tx > -50){
         tx -=25;
       }
       slider.current.style.transform=`translateX(${tx}%)`;
    }

    const slideBackword=()=>{
        if(tx < 0){
            tx +=25;
          }
          slider.current.style.transform=`translateX(${tx}%)`;
    }

  return (
    <div className='testimonials'>
      <Headers sub_title='TESTIMONIALS' main_title='What students say'/>
      <img src={next_icon} className='next-btn' alt="next" onClick={slideForward}/>
      <img src={back_icon} className='back-btn' alt="next" onClick={slideBackword}/>
      <div className='slider'>
        <ul ref={slider}>
            <li>
                <div className='slide'>
                  <div className='user-prof'>
                    <img src={user1} alt='user' />
                    <div className='user-info'>
                        <h3>William Jackson 1</h3>
                        <p>Edusity, USA</p>
                    </div>
                  </div>
                  <p>Choosing to purse my degree at Edusity was one of the best 
                    decisions. I've ever made. The supportive community, 
                    state-of-the-art facilities, and commitment to academic
                     excellence have truly exceeded my expectation.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                  <div className='user-prof'>
                    <img src={user2} alt='user' />
                    <div className='user-info'>
                        <h3>William Jackson 2</h3>
                        <p>Edusity, USA</p>
                    </div>
                  </div>
                  <p>Choosing to purse my degree at Edusity was one of the best 
                    decisions. I've ever made. The supportive community, 
                    state-of-the-art facilities, and commitment to academic
                     excellence have truly exceeded my expectation.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                  <div className='user-prof'>
                    <img src={user3} alt='user' />
                    <div className='user-info'>
                        <h3>William Jackson 3</h3>
                        <p>Edusity, USA</p>
                    </div>
                  </div>
                  <p>Choosing to purse my degree at Edusity was one of the best 
                    decisions. I've ever made. The supportive community, 
                    state-of-the-art facilities, and commitment to academic
                     excellence have truly exceeded my expectation.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                  <div className='user-prof'>
                    <img src={user4} alt='user' />
                    <div className='user-info'>
                        <h3>William Jackson 4</h3>
                        <p>Edusity, USA</p>
                    </div>
                  </div>
                  <p>Choosing to purse my degree at Edusity was one of the best 
                    decisions. I've ever made. The supportive community, 
                    state-of-the-art facilities, and commitment to academic
                     excellence have truly exceeded my expectation.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonial

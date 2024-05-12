import React from 'react'
import Headers from '../Headers/Headers'
import program_1 from '../../Assests/program-1.png'
import program_2 from '../../Assests/program-2.png'
import program_3 from '../../Assests/program-3.png'
import program_icon_1 from '../../Assests/program-icon-1.png'
import program_icon_2 from '../../Assests/program-icon-2.png'
import program_icon_3 from '../../Assests/program-icon-3.png'
import './Program.css'

const Program = () => { 
  return (
    <div className='program-div' id='program'>
      <Headers sub_title='PROGRAM' main_title='What we offer'/>
      <div className='pro-memo'> 
        <div className='memos'>
           <img className='pro-1' src={program_1} alt="program1"/>
            <div className='hover-img'>
              <img className='pro-icon-1'src={program_icon_1} alt="program1"/>
            </div>  
        </div>
         
        <div className='memos'>
           <img className='pro-1' src={program_2} alt="program2"/>
           <div className='hover-img'>
              <img className='pro-icon-1' src={program_icon_2} alt="program2"/> 
            </div>
        </div>
         
        
        <div className='memos'>
           <img className='pro-1' src={program_3} alt="program3"/>
           <div className='hover-img'>
              <img className='pro-icon-1' src={program_icon_3} alt="program3"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Program

import React from 'react'
import gallery_1 from '../../Assests/gallery-1.png'
import gallery_2 from '../../Assests/gallery-2.png'
import gallery_3 from '../../Assests/gallery-3.png'
import gallery_4 from '../../Assests/gallery-4.png'
import './Gallery.css'
import Headers from '../Headers/Headers'

const Gallery = () => { 
  return (
    <div className='gal-div' id='campus'>
      <Headers sub_title='GALLERY' main_title='Campus Photos'/>
      <div className='gal-memo'> 
        <div className='gal-memos'>
           <img className='gal-1' src={gallery_1} alt="program1"/>
        </div>
         
        <div className='gal-memos'>
           <img className='gal-1' src={gallery_2} alt="program2"/>
        </div> 
         
        
        <div className='gal-memos'>
           <img className='gal-1' src={gallery_3} alt="program3"/>
        </div>

        <div className='gal-memos'>
           <img className='gal-1' src={gallery_4} alt="program3"/>
        </div>

      </div>
    </div>
  )
}

export default Gallery

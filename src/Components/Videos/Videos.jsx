import React, { useRef } from 'react'
import video from '../../Assests/campusvideo.mp4'
import './Videos.css'

const Videos = ({playState, setPlayState}) => {
  const player= useRef(null);

  return (
    <div className={`video-player ${playState? '' :'hide'}`} ref={player} onClick={(e)=>{
      if(e.target==player.current){
        setPlayState(false);
      }}}>
       <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default Videos

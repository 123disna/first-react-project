import React from 'react'
import './Headers.css'

const Headers = ({sub_title,main_title}) => {
  return (
    <div>
      <p className='subtitle'>{sub_title}</p>
      <h2 className='title-main'>{main_title}</h2>
    </div>
  )
}

export default Headers

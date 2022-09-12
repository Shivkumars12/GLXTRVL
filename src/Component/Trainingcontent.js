import React from 'react'
import './TrainingStyle.css'
import pod from '../assests/pod.jpg'
import moon from '../assests/moon.jpg'

import { Link } from 'react-router-dom'

export const Trainingcontent = () => {
  return (
    <div className='training'>
      <div className='left'>
        <h1>Training</h1>
        <p>Thorough training is a necessity when traveling to space. We offer all inclusive training for pre-flight and in-flight scenarios.</p>
        <Link to='/contact'><button className='btn'>Contact</button></Link>
      </div>
      <div className='right'>
        <div className='image-container'>
          <div className='image-stack top'>
            <img src={moon} className='img1' alt="" />
          </div>
          <div className='image-stack bottom'>
            <img src={pod} className='img2' alt="" />
          </div>

        </div>
      </div>

    </div>
  )
}

import React from 'react'
import { NavBar } from '../Component/NavBar'
import { Footer } from '../Component/Footer'
import { HeroImage } from '../Component/HeroImage'
import { Trainingcontent } from '../Component/Trainingcontent'



export const Training = () => {
  return (
    <div>
        <NavBar/>
        <HeroImage heading='Training' text='Pre-flight & In-Flight Training'/>
        <Trainingcontent/>
        <Footer/>
    </div>
  )
}

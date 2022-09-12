import React from 'react'
import { NavBar } from '../Component/NavBar'
import { Footer } from '../Component/Footer'
import {HeroImage }from '../Component/HeroImage'
import { Pricingcard } from '../Component/Pricingcard'

export const Pricing = () => {
  return (
    <div>
        <NavBar/>
        <HeroImage heading='Pricing' text='Choose Your Trip'/>
        <Pricingcard/>
        <Footer/>
    </div>
  )
}

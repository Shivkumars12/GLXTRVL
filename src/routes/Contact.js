import React from 'react'
import { Footer } from '../Component/Footer'
import { NavBar } from '../Component/NavBar'
import {Form} from '../Component/Form'
import { HeroImage } from '../Component/HeroImage'


export const Contact = () => {
    return (
        <div>
            <NavBar/>
            <HeroImage heading='Contact'/>
            <Form/>
            <Footer/>
        </div>
    )
}



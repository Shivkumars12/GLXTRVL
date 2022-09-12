import React from 'react'
import { NavBar } from '../Component/NavBar'
import { Video} from '../Component/Video'
import { Footer } from '../Component/Footer'

const Home = () => {
  return (
    <div> 
      <NavBar/>
      <Video/>
      <Footer/>
    </div>
  )
}

export default Home
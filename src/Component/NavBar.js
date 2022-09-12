import React ,{useState}from 'react';
import { Link } from 'react-router-dom';
import {FaBars , FaTimes} from 'react-icons/fa'
import './NavBarStyle.css'


export const NavBar = () => {
      const[click, setClick]=useState(false)
      const handleClick =()=> setClick(!click)

      

  return (
    <div className='header'>
       <Link to='/' ><h1>GLXTRVL</h1></Link> 
       <ul className={click ? 'nav-menu active': 'nav-menu'}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/Pricing'>Pricing</Link>
          </li>
          <li>
            <Link to='/Training'>Training</Link>
          </li>
          <li>
            <Link to='/Contact'>Conatct</Link>
          </li>
       </ul>  
       <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color:'white'}} /> ): (<FaBars size={20} style={{color:'white'}} />)}

       </div>     
    </div>
  )
}

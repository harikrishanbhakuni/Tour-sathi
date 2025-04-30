import React, { useEffect, useState } from 'react'
import { Link } from "react-scroll";
import './Navbar.css'
import Logo from '../../Assets/MOUNTAIN.png'
import menu_icon from '../../Assets/menu-icon.png'
import Login from '../Login/Login';

const Navbar = () => {
  const [sticky,setSticky] =useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);
   const[mobileMenu, setMobilMenu] =useState(false)
  const toggleMenu =()=>{
    mobileMenu ? setMobilMenu(false):setMobilMenu(true)
    
  }
  return (
    <nav className={`container ${sticky? ' dark-nav':''}`} >
        <img  className='logo' src={Logo} alt=''/>
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Service</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>AboutUs</Link></li>
            <li><Link to='gallery' smooth={true} offset={-260} duration={500}>Gallary</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonils</Link></li>
            <li><Link to="/login"  smooth={true} offset={-260} duration={500}>login</Link></li>
          <li><Link to='contact' smooth={true} offset={-260} duration={500} className="btn" >Contact us</Link></li>
        </ul>
        <img src={menu_icon} alt='' className='menu-icon' onClick={toggleMenu}/>

    </nav>
  )
}

export default Navbar

import React from 'react'
import './Navbar.css'
import { useState,useEffect } from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
    const[sticky, setSticky]=useState(false);
    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        };
        
        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

  return (
    <nav className={`container  ${sticky ? "dark-navbar" : ""}`}>
      <img src='/src/assets/logo.png' alt='College Logo' className='logo' />
      <ul>
        <li><Link to="hero" smooth={true} duration={500} offset={-260}>
            Home </Link></li>
        <li><Link to="programs" smooth={true} duration={500} offset={-260}>
            Programs </Link></li>
        <li><Link to="about" smooth={true} duration={500} offset={-260}>
            About us </Link></li>
        <li><Link to="campus" smooth={true} duration={500} offset={-260}>
            Campus </Link></li>
        <li><Link to="testimonials" smooth={true} duration={500} offset={-260}>
            Testimonials </Link></li>
        <li><Link to="contact" smooth={true} duration={500} offset={-260} className='btn'>Contact us</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
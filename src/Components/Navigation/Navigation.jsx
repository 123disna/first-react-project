import React, { useEffect, useState } from 'react';
import './Navigation.css';
import logo from '../../Assests/logo.png';
import menu_icon from '../../Assests/menu-icon.png';

import { Link as ScrollLink } from 'react-scroll';

const Navigation = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [mobileMenu, setMobileMenu]=useState(false);

  const toggleMenu=()=>{
     mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <div className={`navigation-bar ${sticky ? 'dark-nav' : ''}`}>
      <img className='nav-img' src={logo} alt="logo" />

      <ul className={`nav-list ${mobileMenu ? '' : 'hide-menu' }`}>
        <li><ScrollLink to='hero' smooth={true} offset={0} duration={500}>Home</ScrollLink></li>
        <li><ScrollLink to='program' smooth={true} offset={-150} duration={500}>Program</ScrollLink></li>
        <li><ScrollLink to='about' smooth={true} offset={-130} duration={500}>About us</ScrollLink></li>
        <li><ScrollLink to='campus' smooth={true} offset={-150} duration={500}>Campus</ScrollLink></li>
        <li><ScrollLink to='testimonials' smooth={true} offset={-150} duration={500}>Testimonials</ScrollLink></li>
        <li><ScrollLink to='contact' smooth={true} offset={-150} duration={500}><button className='contact-btn'>Contact us</button></ScrollLink></li>
      </ul>
      <img onClick={toggleMenu} src={menu_icon} alt='menu' className='menu-icon'/>
    </div>
  );
};

export default Navigation;

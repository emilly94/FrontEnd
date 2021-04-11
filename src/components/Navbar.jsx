import React from 'react';
import logoCovidImg from '../assets/covid_19.png';

import '../styles/Navbar.css';

const Navbar = () =>{
  return(
    <header>
    <nav id='navbar'>
        <img src={logoCovidImg} alt="Covid"/>
      <ul className='nav-list'>
        <li className='nav-item'><a href="/">Home</a></li>
        <li className='nav-item'><a href="/">Contador</a></li>
        <li className='nav-item'><a href="/">Contact</a></li>
      </ul>
    </nav>
    </header>
    
  )
}

export default Navbar;
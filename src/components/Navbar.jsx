import React from 'react';
import Imagem from '../img/covid-19.webp';

const Navbar = () =>{
  return(
    <nav id='navbar'>
        <img src={Imagem} alt="Covid"/>
      <ul className='nav-list'>
        <li className='nav-item active'><a href="/">Home</a></li>
        <li className='nav-item'><a href="/">About</a></li>
        <li className='nav-item'><a href="/">Blog</a></li>
        <li className='nav-item'><a href="/">Contact</a></li>
      </ul>
    </nav>
    
  )
}

export default Navbar;
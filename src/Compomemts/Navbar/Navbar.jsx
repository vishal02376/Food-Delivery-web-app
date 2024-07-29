import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ SetLogin }) => {
  let [menu, setMenu] = useState('Home');
  let [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navBar'>
      {/* <img src={assets.logo} alt="" className='logo' /> */}
      <h1 className="logo">TiF-fin</h1>
      <div className={`Navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link to='/' onClick={() => { setMenu('Home'); setIsMenuOpen(false); }} className={menu === 'Home' ? 'active' : ''}>Home</Link>
        <a href='#Explore-Menu' onClick={() => { setMenu('Menu'); setIsMenuOpen(false); }} className={menu === 'Menu' ? 'active' : ''}>Menu</a>
        <a href='#Appdownload' onClick={() => { setMenu('App'); setIsMenuOpen(false); }} className={menu === 'App' ? 'active' : ''}>App</a>
        <a href='#Footer' onClick={() => { setMenu('Contact us'); setIsMenuOpen(false); }} className={menu === 'Contact us' ? 'active' : ''}>Contact us</a>
      </div>
      
      <div className="Navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navSearch-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div> 
        <button onClick={() => SetLogin(true)}>Sign in</button>
      </div>
      
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <span>&times;</span> : <span>&#9776;</span>}
      </div>
    </div>
  );
}

export default Navbar;

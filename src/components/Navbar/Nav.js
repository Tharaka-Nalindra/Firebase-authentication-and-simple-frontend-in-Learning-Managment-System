// Nav.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './NavModule.css';
import logo from '../Image/logo.jpg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='nav'>
      <nav className={`navbar ${menuOpen ? 'menu-open' : ''}`}>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className='mobile-menu' onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        </div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/AboutUs">Home</Link></li>
          <li><Link to="/Dashboard">Dashboard</Link></li>
          <li><Link to="/Grades">Grades</Link></li>
          <li><Link to="/Course">My Course</Link></li>
          <li><Link to="/AboutUs">About Us</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
        <div className={`profile ${menuOpen ? 'open' : ''}`}>
          <ul className='pp'>
            <li><Link to="/Profile">Name</Link></li>
            <li><Link to="/Profile"><AccountCircleIcon/></Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

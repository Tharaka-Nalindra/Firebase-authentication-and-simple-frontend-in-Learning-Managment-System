import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Navbar/Nav';
import './DashboadModule.css';
import UniImg from '../Image/HomeImg/UniImg.jpg';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GradeIcon from '@mui/icons-material/Grade';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Dash() {
  return (
    <div>
      <div className='nav'><Nav />
      </div>
      <div className='DashpageBody'>
        <div className='Dashmenu'>
          <ul className='DashmenuItem'>
            <li><Link to="/AboutUs"><HomeIcon/>Home</Link></li>
            <li><Link to="/Dashboard"><DashboardIcon/>Dashboard</Link></li>
            <li><Link to="/Profile"><AccountCircleIcon/>Profile</Link></li>
            <li><Link to="/Grades"><GradeIcon/>Grade</Link></li>
            <li><Link to="/Course"><GolfCourseIcon/>My course</Link></li>
            <li><Link to="/AboutUs"><InfoIcon/>About Us</Link></li>
            <li><Link to="/Contact"><CallIcon/>Contact</Link></li>
            <li><Link to="/"><LogoutIcon/>LogOut</Link></li>
          </ul>
        </div>

        <div className='DashUniName'>
          <h2>Online Learning Management System, University of Asia</h2>
        </div>

        <div className='DashUniImg'>
          <img src={UniImg} alt='UniImg' />
        </div>
      </div>
    </div>
  );
}

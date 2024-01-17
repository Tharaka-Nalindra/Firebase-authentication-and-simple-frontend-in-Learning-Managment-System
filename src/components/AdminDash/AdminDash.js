import React from 'react'
import './AdminDashmodule.css'
import AdminNav from '../AdminNav/AdminNav'

import home from '../Image/HomeImg/home.png';
import Dashboard from '../Image/HomeImg/dashboad.png';
import Profile from '../Image/HomeImg/profile.png';
import My_course from '../Image/HomeImg/course.png';
import LOgOut from '../Image/HomeImg/logOud.png';
import Teacher from '../Image/HomeImg/teacher.png';
import Student from '../Image/HomeImg/students.png';
import file from '../Image/file.png';



export default function AdminDash() {
  return (
    <div>
        <div className='nav'><AdminNav/></div>

        <div className='pageBody'>
            <div className='menu'>
                <ul className='menuItem'>
                    <li><a href="Login.js"><img src={home} alt='Home'/>Home</a></li>
                    <li><a href="Login.js"><img src={Dashboard} alt='Dashboard'/>Dashboard</a></li>
                    <li><a href="Login.js"><img src={Profile} alt='Proile'/>Profile</a></li>
                    <li><a href="Course.js"><img src={My_course} alt='My course'/>course</a></li>
                    <li><a href="Course.js"><img src={Teacher} alt='My course'/>Teacher</a></li>
                    <li><a href="Course.js"><img src={Student} alt='My course'/>Student</a></li>
                    <li><a href="Login.js"><img src={LOgOut} alt='LogOut'/>LogOut</a></li>
                </ul>
            </div>
            
            <div className='edit'>
                <div className='course'>
                    <img src={file} alt='fie'></img>
                    <h3>Add course</h3>
                </div>
                
                <div className='course'>
                    <img src={file} alt='fie'></img>
                    <h3>Edit Course</h3>
                </div>
            </div>
        </div>

    </div>
  )
}

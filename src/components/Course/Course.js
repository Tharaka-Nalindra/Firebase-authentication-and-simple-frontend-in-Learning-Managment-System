import React from 'react'
import Nav from '../Navbar/Nav';
import './CourseModule.css'
import soft from '../Image/Course/soft.jpg'
import db from '../Image/Course/db.jpg'
import net from '../Image/Course/nat.jpg'
import pro from '../Image/Course/pro.jpg'

export default function Course() {
  return (
    <div>
      <div className='nav'><Nav/></div>
      <div className='pageBody'>
        <div className='Coursetopic'><h2>My Course</h2></div>

        <div className='courses'>
            <div className='Scourse'>
                <img src={soft} alt='soft'/>
                <h3>Software enineering</h3>
            </div>

            <div className='Scourse'>
                <img src={net} alt='net'/>
                <h3>Neworking</h3>
            </div>

            <div className='Scourse'>
                <img src={pro} alt='pro'/>  
                <h3>Programing</h3>
            </div>

            <div className='Scourse'>
                <img src={db} alt='db'/>
                <h3>Database </h3>
            </div>

        </div>
        

      </div>

    
    </div>
  )
}

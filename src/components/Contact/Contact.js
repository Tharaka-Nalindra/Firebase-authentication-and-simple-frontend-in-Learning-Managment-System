import React from 'react';
import './ContactModule.css';
import Nav from '../Navbar/Nav';
import add from '../Image/HomeImg/home.png';
import phone from '../Image/HomeImg/contact.png';

export default function Contact() {
  return (
    <div>
      <div className='nav'><Nav/></div>
      <div className='pageBody'>
        <div className='topic'><h2>General Contact Information</h2></div>
        <div className='contact'>
          <div className='add'>
            <img src={add} alt='add'/>
            <h3>ADDRESS</h3> 
            <h4>College House<br/>
                94, Cumaratunga Munidasa Mw<br/>
                Colombo 03<br/>
                Sri Lanka<br/>
            </h4>
          </div>
          <div className='phone'>
            <img src={phone} alt='adphone'/>
            <h3>TELEPHONE</h3>
            <h4>(+94)112581835<br/>
                (+94)112584695<br/>
                (+94)112585509</h4>
          </div>
          <div className='map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.63215406914!2d79.77380325830437!3d6.921831560912792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1691922042408!5m2!1sen!2slk" 
            width="600" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen=""
            loading="lazy" 
            title="Google Map">
          </iframe>
          </div>
          </div>
        
        <div className='map'>
          
        </div>
      </div>
    </div>
  );
}

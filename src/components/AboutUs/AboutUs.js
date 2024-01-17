import React from 'react'
import './AboutUsModule.css';
import Nav from '../Navbar/Nav';
import uniImg from '../Image/HomeImg/UniImg.jpg'


export default function aboutUs() {
  return (
    <div>
        <div className='nav'><Nav/></div>
        <div className='AboutpageBody'>
            <div className='Abouttopic'><h2>About Us</h2></div>
            <div className='AboutuniImg'><img src={uniImg} alt='uniimg'/></div>

            <div className='description'><h4>The University of Colombo, founded in 1921, is Sri Lanka’s oldest Higher Education Institution. In keeping with its motto बुद्धिः शर्वत्र भ्रजते (Buddhi Sarvathra Bhrajate), translated from Sanskrit as “Wisdom Enlightens”, the University of Colombo continually strives to maintain academic excellence in all fields of study. The University is organized across 10 Faculties and 68 academic departments within faculties, along with 6 Institutes, a Campus, a School, and 20+ Centres & Units.
            Located primarily in the Colombo metropolitan region, the University of Colombo is structured as a state institution which provides access to higher education across the country. The main campus is sited in the heart of Colombo, on a sprawling 50-acre estate, and comprises contemporary urban constructions, as well as old colonial architecture, considered national heritage sites. The pioneer Medical Faculty in Sri Lanka, the Faculty of Medicine, University of Colombo celebrated its 150th Anniversary in 2020, while the Faculty of Law and the Faculty of Education of the University of Colombo are the only such stand aloneFaculties that are dedicated to these fields of study in the state-run, free education system of Sri Lanka. The University is a proud member of the Asian Universities Alliance of which the Executive Presidency for the period 2019-2020 is held by the University of Colombo.</h4></div>
        </div>
      
    </div>
  )
}

import React from 'react'

import profileImage from './img/AndresProfileGuac.png'

const About = () => (
  <div id='about' className='about-wrapper'>
    <div className='about-profile container'>
      <div className='about-picture'>
        <img className='about-image' src={profileImage}/>
      </div>
      <div className='about-body'>
        <p className='about-quote'>{'Turning complex problems into creatively simple solutions.'}</p>
        <p className='about-text'>{'I design software that is intuitive and stylized. Other passions include: guacamole, pencil sketching, and building computers.'}</p>
      </div>
    </div>
  </div>
)

export default About

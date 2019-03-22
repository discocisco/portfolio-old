import React from 'react'

import profileImage from './img/profile-photo.png'

const About = () => (
  <div id='about' className='about-wrapper'>
    <div className='about-title'>
      About
    </div>
    <div className='about-profile container'>
      <div className='about-picture'>
        <img className='about-image' src={profileImage}/>
      </div>
      <div className='about-body'>
        <p className='about-quote'>{'"Turning complex problems into creatively simple solutions"'}</p>
        <p className='about-text'>{'I\'m a developer focused on making the user experience fluid, intuitive, and enjoyable. I enjoy creating applications that are smooth, effective, and UI/UX focused. If I\'m not programming, you can find me building computers, sketching tattoo designs, & researching the latest film practices.'}</p>
      </div>
    </div>
  </div>
)

export default About

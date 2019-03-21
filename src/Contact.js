import React from 'react'

import resume from './img/AndresOrtizPortfolioResume.pdf'
import emailIcon from './img/email.png'
import resumeIcon from './img/curriculum.png'
import linkedInIcon from './img/linkedin.png'
import githubIcon from './img/github-sign.png'

// import octocat from './img/GitHub-Mark-Light-64px.png'

const Contact = () => (
  <div id='contact' className='contact-wrapper'>
    <div className='contact-title'>
      Contact
    </div>
    <div className='contact-container'>
      <div className='contact-btns-row'>
        <div className='contact-btn'>
          <a href='https://github.com/discocisco' target='_blank' rel='noopener noreferrer'>
            <div className='contact-icon'>
              <img className='github-img' src={githubIcon} />
            </div>
          </a>
        </div>
        <div className='contact-btn'>
          <a href='https://www.linkedin.com/in/f-andres-ortiz/' target='_blank' rel='noopener noreferrer'>
            <div className='contact-icon'>
              <img className='linkedin-img' src={linkedInIcon} />
            </div>
          </a>
        </div>
        <div className='contact-btn'>
          <a href='mailto:f.andresort@gmail.com' target='_blank' rel='noopener noreferrer'>
            <div className='contact-icon'>
              <img className='email-img' src={emailIcon} />
            </div>
          </a>
        </div>
        <div className='contact-btn'>
          <a href={resume} target='_blank' rel='noopener noreferrer'>
            <div className='contact-icon'>
              <img className='resume-img' src={resumeIcon} />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Contact

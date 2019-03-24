import React from 'react'

import resume from './img/AndresOrtizPortfolioResume.pdf'
import emailIcon from './img/email.png'
import resumeIcon from './img/curriculum.png'
import linkedInIcon from './img/linkedin.png'
import githubIcon from './img/github-sign.png'

const Contact = () => (
  <div id='contact' className='contact-wrapper'>
    <div className='contact-title'>
      Contact
    </div>
    <div className='contact-container container'>
      <div className='contact-btns-row row'>
        <div className='contact-btn col-12 col-sm-6'>
          <a href='https://github.com/discocisco' target='_blank' rel='noopener noreferrer'>
            <div className='contact-icon'>
              <img className='github-img' src={githubIcon} />
            </div>
          </a>
          <div className='contact-name'>
            Github - @discocisco
          </div>
        </div>
        <div className='contact-btn col-12 col-sm-6'>
          <a href='https://www.linkedin.com/in/f-andres-ortiz/' target='_blank' rel='noopener noreferrer'>
            <div className='contact-icon'>
              <img className='linkedin-img' src={linkedInIcon} />
            </div>
          </a>
          <div className='contact-name'>
            f-andres-ortiz
          </div>
        </div>
        <div className='contact-btn col-12 col-sm-6'>
          <a href='mailto:f.andresort@gmail.com' target='_blank' rel='noopener noreferrer'>
            <div className='contact-icon'>
              <img className='email-img' src={emailIcon} />
            </div>
          </a>
          <div className='contact-name'>
            f.andresort@gmail.com
          </div>
        </div>
        <div className='contact-btn col-12 col-sm-6'>
          <a href={resume} target='_blank' rel='noopener noreferrer'>
            <div className='contact-icon'>
              <img className='resume-img' src={resumeIcon} />
            </div>
          </a>
          <div className='contact-name'>
            Résumé
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Contact

import React from 'react'

import resume from './img/AndresOrtizPortfolioResume.pdf'

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
              <span className='devicons devicons-github_badge'/>
            </div>
          </a>
        </div>
        <div className='contact-btn'>
          <a href='https://www.linkedin.com/in/f-andres-ortiz/' target='_blank' rel='noopener noreferrer'>
            <div className='contact-icon'>
            LinkedIn
            </div>
          </a>
        </div>
        <div className='contact-btn'>
          <a href='mailto:f.andresort@gmail.com' target='_blank' rel='noopener noreferrer'>
            <div className='contact-icon'>
            Email
            </div>
          </a>
        </div>
        <div className='contact-btn'>
          <a href={resume} target='_blank' rel='noopener noreferrer'>
            <div className='contact-icon'>
            Resume
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Contact

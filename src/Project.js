import React, { Fragment } from 'react'

const Project = ({ key, title, projStyling, imgSrc, summary, link, tech, repos }) => (
  <div className={`row project-item ${projStyling}`}>
    <div className='project-photo col-12 col-lg-7'>
      <a href={link} target='_blank' rel='noopener noreferrer'><img src={imgSrc}/></a>
    </div>
    <div className='project-description col-12 col-lg-5'>
      <div className='project-title'>
        {title}
        <div className='project-link'>
          <a href={link} target='_blank' rel='noopener noreferrer'>{link}</a>
        </div>
      </div>
      <div className='project-summary'>
        {summary}
      </div>
      <div className='project-tech'>
        {tech.map(techItem => <span
          key={techItem}
          className={`devicons devicons-${techItem}`}
        />) }
      </div>
      <div className='project-repos'>
        <span className='project-github-repos devicons devicons-github_badge' /> Repositories:
        {repos.length === 2 ? <Fragment><a href={repos[0]} target='_blank' rel='noopener noreferrer'>Web Client</a> || <a href={repos[1]} target='_blank' rel='noopener noreferrer'>API</a></Fragment> : <a href={repos[0]} target='_blank' rel='noopener noreferrer'> Web Client</a>}
      </div>
    </div>
  </div>
)

export default Project

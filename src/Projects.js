import React from 'react'

import Project from './Project.js'

const projectArr = [
  { name: 'Scene It', project: 'project-1' },
  { name: 'Stumblr', project: 'project-2' },
  { name: 'Glyphs', project: 'project-3' },
  { name: 'Tik-Tak-Toad', project: 'project-4' }
]

const Projects = () => (
  <div className='projects-wrapper'>
    <div className='projects-title'>
      Portfolio
    </div>
    <div className='project-wrapper'>
      {projectArr.map(project =>
        <Project
          key={project.project}
          projectName={project.name}
          projectClass={project.project}
        />)}
    </div>
  </div>
)

export default Projects

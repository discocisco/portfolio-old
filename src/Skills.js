import React from 'react'

import Skill from './Skill.js'

const skillsArr = [
  { name: 'HTML', deviconName: 'html5' },
  { name: 'CSS', deviconName: 'css3' },
  { name: 'JavaScript', deviconName: 'javascript_badge' },
  { name: 'React', deviconName: 'react' },
  { name: 'Sass', deviconName: 'sass' },
  { name: 'Boostrap', deviconName: 'bootstrap' },
  { name: 'jQuery', deviconName: 'jquery' },
  { name: 'Ruby', deviconName: 'ruby' },
  { name: 'Ruby on Rails', deviconName: 'ruby_on_rails' },
  { name: 'PostgreSQL', deviconName: 'postgresql' },
  { name: 'Node.js', deviconName: 'nodejs' },
  { name: 'MongoDB', deviconName: 'mongodb' },
  { name: 'Mongoose.js', deviconName: 'nodejs_small' },
  { name: 'Express.js', deviconName: 'nodejs_small' },
  { name: 'Git', deviconName: 'git' }
  // { name: 'MATLAB', deviconName: 'code_badge' },
  // { name: 'AutoCAD', deviconName: 'code_badge' },
  // { name: 'GIMP', deviconName: 'code_badge' }
]

const Skills = () => (
  <div id='skills' className='skills-wrapper'>
    <div className='skills-title'>
      Skills
    </div>
    <div className='skills-content'>
      {skillsArr.map(skill =>
        <Skill key={skill} name={skill.name} deviconName={skill.deviconName}/>)}
    </div>
  </div>
)

export default Skills

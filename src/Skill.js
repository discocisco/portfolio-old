import React from 'react'

const Skill = ({ name, deviconName }) => (
  <div className='skill-item'>
    <div className='skill-icon'>
      <span className={`devicons devicons-${deviconName}`} />
    </div>
    <div className='skill-text'>
      {name}
    </div>
  </div>
)

export default Skill

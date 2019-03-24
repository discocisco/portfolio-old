import React from 'react'

const Skill = ({ name, deviconName }) => (
  <div className='skill-item col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2'>
    <div className='skill-icon'>
      <span className={`devicons devicons-${deviconName}`} />
    </div>
    <div className='skill-text'>
      {name}
    </div>
  </div>
)

export default Skill

import React from 'react'

import resume from './img/AndresOrtizPortfolioResume.pdf'

const Menu = () => (
  <nav className='sticky menu'>
    <div className='menu-item'><a href='#about'>About</a></div>
    <div className='menu-item'><a href='#skills'>Skills</a></div>
    <div className='menu-item'><a href='#portfolio'>Portfolio</a></div>
    <div className='menu-item'><a href='#contact'>Contact</a></div>
    <div className='menu-item'><a href={resume} target='_blank' rel='noopener noreferrer'>Résumé</a></div>
  </nav>
)

export default Menu

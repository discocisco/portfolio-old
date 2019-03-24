import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import resume from './img/AndresOrtizPortfolioResume.pdf'

const Menu = () => (
  <Navbar fixed='top' className='menu justify-content-end' variant='dark' collapseOnSelect expand='md'>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse className='justify-content-end' id="responsive-navbar-nav">
      <Nav className="ml-auto justify-content-end">
        <Nav.Item><Nav.Link href='#about'>About</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href='#skills'>Skills</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href='#portfolio'>Portfolio</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href='#contact'>Contact</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href={resume} target='_blank' rel='noopener noreferrer'>Résumé</Nav.Link></Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Menu

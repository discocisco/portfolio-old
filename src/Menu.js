import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import resume from './img/AndresOrtizPortfolioResume.pdf'

const Menu = () => (
  <Navbar fixed='top' className='menu justify-content-end' variant='dark' collapseOnSelect expand='md'>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse className='justify-content-end' id="responsive-navbar-nav">
      <Nav className="ml-auto justify-content-end">
        <Nav.Link href='#home'><Nav.Item>Home</Nav.Item></Nav.Link>
        <Nav.Link href='#about'><Nav.Item>About</Nav.Item></Nav.Link>
        <Nav.Link href='#skills'><Nav.Item>Skills</Nav.Item></Nav.Link>
        <Nav.Link href='#portfolio'><Nav.Item>Portfolio</Nav.Item></Nav.Link>
        <Nav.Link href='#contact'><Nav.Item>Contact</Nav.Item></Nav.Link>
        <Nav.Link href={resume} target='_blank' rel='noopener noreferrer'><Nav.Item>Resume</Nav.Item></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Menu

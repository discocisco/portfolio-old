import React, { Component } from 'react'
import './css/App.scss'

import Parallax from './Parallax.js'
import Menu from './Menu.js'
import Intro from './Intro.js'
import About from './About.js'
import Skills from './Skills.js'
import Projects from './Projects.js'
import Contact from './Contact.js'
import Footer from './Footer.js'

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Parallax />
        <Menu />
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App

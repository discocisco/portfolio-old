import React, { Component } from 'react'
import './App.scss'

import Parallax from './Parallax.js'
import Menu from './Menu.js'
import Intro from './Intro.js'
import About from './About.js'
import Skills from './Skills.js'
import Projects from './Projects.js'
import Contact from './Contact.js'

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
      </React.Fragment>
    )
  }
}

export default App

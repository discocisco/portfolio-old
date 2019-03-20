import React, { Component } from 'react'
import './App.scss'

import Parallax from './Parallax.js'
import Menu from './Menu.js'
import Intro from './Intro.js'
import About from './About.js'
import Skills from './Skills.js'

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Menu />
        <Parallax />
        <Intro />
        <About />
        <Skills />
      </React.Fragment>
    )
  }
}

export default App

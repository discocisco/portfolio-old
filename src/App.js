import React, { Component } from 'react'
import './App.scss'

import Parallax from './Parallax.js'
import Menu from './Menu.js'
import Intro from './Intro.js'
import About from './About.js'

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Parallax />
        <Menu />
        <Intro />
        <About />
      </React.Fragment>
    )
  }
}

export default App

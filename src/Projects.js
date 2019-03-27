import React from 'react'

import Project from './Project.js'
import project1 from './img/SceneIt_screenshot.png'
import project2 from './img/StumblrApp-Page.png'
import project3 from './img/GlyphsApp-Page.png'
import project4 from './img/TicTacToeApp-Page.png'

const projectArr = [
  { name: 'Scene It',
    styling: 'project-1',
    imgSrc: project1,
    summary: 'Movie database application for storing favorites and writing reviews. Includes Yelp Fusion API to find movie theaters based on location!',
    link: 'https://discocisco.github.io/scene-it',
    tech: [
      'react', 'javascript_badge', 'sass', 'html5', 'css3', 'bootstrap', 'ruby', 'ruby_on_rails', 'postgresql', 'heroku'
    ],
    repos: ['https://github.com/discocisco/scene-it', 'https://github.com/discocisco/scene-it-api']
  },
  { name: 'Stumblr.',
    styling: 'project-2',
    imgSrc: project2,
    summary: 'Microblogging website to share personal blogs for yourself or for your friends! Led a team of four members throughout development of front and back-end procedures',
    link: 'https://hex-llc.github.io/stumblr-client',
    tech: [
      'javascript_badge', 'sass', 'html5', 'css3', 'bootstrap', 'jquery', 'nodejs', 'mongodb', 'nodejs_small', 'nodejs_small', 'heroku'
    ],
    repos: ['https://github.com/hex-llc/stumblr-client', 'https://github.com/hex-llc/stumblr-api']
  },
  { name: 'Glyphs',
    styling: 'project-3',
    imgSrc: project3,
    summary: 'Font-viewing tool displaying unique styles in real-time. You can also store your favorites and organize by what project you\'re working on!',
    link: 'https://discocisco.github.io/glyphs-client',
    tech: [
      'javascript_badge', 'sass', 'html5', 'css3', 'bootstrap', 'jquery', 'ruby', 'ruby_on_rails', 'postgresql', 'heroku'
    ],
    repos: ['https://github.com/discocisco/glyphs-client', 'https://github.com/discocisco/glyphs-api']
  },
  { name: 'Tic-Tac-Toe',
    styling: 'project-4',
    imgSrc: project4,
    summary: 'Classic game of Tic-Tac-Toe with saved profiles and local or online multiplayer! Review past games or resume current ones right where you left off!',
    link: 'https://discocisco.github.io/tictactoe-client',
    tech: [
      'javascript_badge', 'sass', 'html5', 'css3', 'bootstrap', 'jquery'
    ],
    repos: ['https://github.com/discocisco/tictactoe-client']
  }
]

const Projects = () => (
  <div id='portfolio' className='projects-wrapper'>
    <div className='projects-title'>
      Portfolio
    </div>
    <div className='project-wrapper container'>
      {projectArr.map(project =>
        <Project
          key={project.styling}
          title={project.name}
          projStyling={project.styling}
          imgSrc={project.imgSrc}
          summary={project.summary}
          link={project.link}
          tech={project.tech}
          repos={project.repos}
        />)}
    </div>
  </div>
)

export default Projects

import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'

import Home from '../Home/Home'
import About from '../About/About'
import Resume from '../Resume/Resume'
import Contact from '../Contact/Contact'

class App extends Component {
  render () {
    return (
      <div className='ek-portfolio'>
        <div className='title'>
          <Link to='/' className='home-link'>
            <h1>ERIN KELLEY</h1>
          </Link>
        </div>
        <div class='pink' />
        <nav>
          <ul className='navBar'>
            <Link to='/about' className='about-link'>
              <li><h2>ABOUT</h2></li>
            </Link>
            <Link to='/resume' className='resume-link'>
              <li><h2>RESUME</h2></li>
            </Link>
            <Link to='/contact' className='contact-link'>
              <li><h2>CONTACT</h2></li>
            </Link>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route
              exact
              path='/'
              component={Home}
            />
            <Route
              exact
              path='/about'
              component={About}
            />
            <Route
              exact
              path='/resume'
              component={Resume}
            />
            <Route
              exact
              path='/contact'
              component={Contact}
            />
          </Switch>
        </main>
        <footer>
          <a href='https://www.linkedin.com/in/erinmargaretkelley/' target='_blank'>
            <img src='https://png.icons8.com/metro/1600/linkedin.png' alt='LinkedIn' id='linkedin' />
          </a>
          <a href='https://www.instagram.com/obsessedwithyouguys/' target='_blank'>
            <img src='http://www.transparentpng.com/download/instagram-logo-icon/48Z4qt-black-white-instagram-logo-transparent-icon.png' alt='Instagram' id='instagram' />
          </a>
        </footer>
      </div>
    )
  }
}

export default App
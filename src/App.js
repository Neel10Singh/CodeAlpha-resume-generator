import React from 'react'

import './static/scss/app.scss'
import 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import Header from './components/presentation/header'
import Footer from './components/presentation/footer'
import LandingPage from './components/presentation/landingPage'

import AboutUs from './components/presentation/aboutUs'
import Contacts from './components/presentation/contact'
import Skills from './components/presentation/skill'
import Education from './components/presentation/education'
import Finalize from './components/presentation/finalizePage'
import Proffesion from './components/presentation/Proffession'
import Projects from './components/presentation/Projects'

function App() {
  return (
    <div className='maine'>
      <Header></Header>

      <Switch>
        <Route path='/education' component={Education}></Route>
        <Route path='/proffesion' component={Proffesion}></Route>
        <Route path='/projects' component={Projects}></Route>
        <Route path='/skills' component={Skills}></Route>
        <Route path='/contact' component={Contacts}></Route>
        <Route path='/about-us' component={AboutUs}></Route>
        <Route path='/finalize' component={Finalize}></Route>
        <Route path='/' component={LandingPage}></Route>
      </Switch>
      <Footer></Footer>
    </div>
  )
}

export default App

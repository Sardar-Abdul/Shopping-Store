import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//Components
import About from './Components/About'
import Shop from './Components/Shop'
import Nav from './Components/Nav'
import Home from './Components/Home'

const App = () => {
  return (
    <div className = 'app'>
      <Router>
        <Nav />
        <Switch>
          <Route path = '/' exact component = {Home} />
          <Route path = '/about' component = {About} />
          <Route path = '/shop' component = {Shop} />
        </Switch>
      </Router>
    </div>
  )
}

export default App

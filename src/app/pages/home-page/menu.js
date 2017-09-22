import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import Reading from './tabs/reading'
import ToRead from './tabs/to-read'
import Readed from './tabs/readed'
import Dropped from './tabs/dropped'

const Menu = () => {
    return <Router>
        <div>
        <ul className='nav-list'>
            <li><Link to='/reading'>Reading</Link></li>
            <li><Link to='/to-read' className='nav'>To read</Link></li>
            <li><Link to='/readed' className='nav'>Readed</Link></li>
            <li><Link to='/dropped' className='nav'>Dropped</Link></li>
        </ul>
            <Route path='/reading' component={Reading} />
            <Route path='/to-read' component={ToRead} />
            <Route path='/readed' component={Readed} />
            <Route path='/dropped' component={Dropped} />
            </div>
    </Router>
}

export default Menu
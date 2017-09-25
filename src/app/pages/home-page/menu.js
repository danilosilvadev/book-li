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
import styled from 'styled-components';

const MenuStyle = {
    textDecoration: 'none',
    color: '#bfbfbf'
}

const active = () => {
    return 'x'
}

const Menu = () => {
    return <Router>
        <div>
        <ul className='nav-list'>
            <li><Link to='/reading' className='nav' style={MenuStyle}>Reading</Link></li>
            <li><Link to='/to-read' className='nav' style={MenuStyle}>To read</Link></li>
            <li><Link to='/readed' className='nav' style={MenuStyle}>Readed</Link></li>
            <li><Link to='/dropped' className='nav' style={MenuStyle}>Dropped</Link></li>
        </ul>
            <Route path='/reading' component={Reading} />
            <Route path='/to-read' component={ToRead} />
            <Route path='/readed' component={Readed} />
            <Route path='/dropped' component={Dropped} />
            </div>
    </Router>
}

export default Menu
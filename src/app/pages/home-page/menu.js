import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
} from 'react-router-dom'
import Reading from './tabs/reading'
import ToRead from './tabs/to-read'
import Readed from './tabs/readed'
import Dropped from './tabs/dropped'
import styled from 'styled-components';
import MainPage from '../../components/MainPage/MainPage'

class Menu extends Component {

    constructor(props) {
        super(props);
       
        this.handleTab = this.handleTab.bind(this);
    }
    state = {
        buttonColor: '#bfbfbf'
    }

    MenuStyle = {
        textDecoration: 'none',
        color: this.state.buttonColor
    }


    handleTab(e) {
        e.preventDefault();
        this.setState({ buttonColor: 'red' });
    }

    render() {
        return <Router>
            <div>
                <ul className='nav-list'>
                    <li><NavLink to='/reading' className='nav' style={this.MenuStyle} isActive={this.handleTab}>Reading</NavLink></li>
                    <li><Link to='/to-read' className='nav' >To read</Link></li>
                    <li><Link to='/readed' className='nav' >Readed</Link></li>
                    <li><Link to='/dropped' className='nav' >Dropped</Link></li>
                </ul>
                <Route path='/reading' component={Reading} />
                <Route path='/to-read' component={ToRead} />
                <Route path='/readed' component={Readed} />
                <Route path='/dropped' component={Dropped} />
            </div>
        </Router>
    }
}

export default Menu
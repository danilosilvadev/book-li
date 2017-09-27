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
import MainPage from '../../components/MainPage/MainPage'
import PropTypes from 'prop-types'; // ES6
import { withRouter } from 'react-router';

class Menu extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            buttonColor: '#bfbfbf'
        }
        this.handleTab = this.handleTab.bind(this);        
    }
/*
    MenuStyle = {
        textDecoration: 'none',
        color: this.state.buttonColor
    }

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      }

    onBackButtonEvent(e) {
        e.preventDefault();
        this.context.propTypes.transitionTo('/');
    }

    componentDidMount() {
        window.onpopstate = this.onBackButtonEvent;
    }
    */


    handleTab(e) {
        e.preventDefault();        
        this.setState({ buttonColor: 'red' });
    }

   

    

    render() {
        console.log(this.context.history, this.context.location)        
        return <Router>
            <div>
                <ul className='nav-list'>
                    <li><Link to='/reading' className='nav' /*style={MenuStyle} */>Reading</Link></li>
                    <li><Link to='/to-read' className='nav' >To read</Link></li>
                    <li><Link to='/readed' className='nav' >Readed</Link></li>
                    <li><Link to='/dropped' className='nav' >Dropped</Link></li>
                </ul>
                <Route path='/reading' component={Reading} isActive={this.handleTab}/>
                <Route path='/to-read' component={ToRead} />
                <Route path='/readed' component={Readed} />
                <Route path='/dropped' component={Dropped} />
            </div>
        </Router>
    }
}

export default Menu
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './../../pages/home-page/home';
import Reading from '../../pages/home-page/tabs/reading'
import ToRead from '../../pages/home-page/tabs/to-read'
import Readed from '../../pages/home-page/tabs/readed'
import Dropped from '../../pages/home-page/tabs/dropped'


class MainRouter extends Component {
  render() {
    return (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/reading' component={Reading}/>
                <Route path='/to-read' component={ToRead} />
                <Route path='/readed' component={Readed} />
                <Route path='/dropped' component={Dropped} />
        </Switch>
  </main>
    );
  }
}

export default MainRouter;

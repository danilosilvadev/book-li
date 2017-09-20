import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './components/MainPage/MainPage';
import './assets/images/favicon.ico';
import { BrowserRouter } from 'react-router-dom'
import Grid from './assets/grid.css'



ReactDOM.render(<BrowserRouter><MainPage /></BrowserRouter>, document.getElementById('root'));
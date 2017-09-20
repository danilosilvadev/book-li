import React, { Component } from 'react'

const Menu = () => {
    return <ul className='nav-list'>
        <li><a href='#'>Reading</a></li>
        <li><a href='#' className='nav'>To read</a></li>
        <li><a href='#' className='nav'>Readed</a></li>
        <li><a href='#' className='nav'>Dropped</a></li>
    </ul>
}

export default Menu
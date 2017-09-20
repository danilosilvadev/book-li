import React, { Component } from 'react'
import Search from './search'
import User from './user'

const Header = () => {
    return <div className='header'>
        <h1>Header</h1>
        <Search />
        <User />
        </div>
}

export default Header
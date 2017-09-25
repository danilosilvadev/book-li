import React, { Component } from 'react'
import Search from './search'
import User from './user'
import styled from 'styled-components'

const H1 = styled.h1`
        color: #ff9c76;
`

const Header = () => {
    return <div className='header'>
        <H1>Book-Li</H1>
        <Search />
        <User />
        </div>
}

export default Header
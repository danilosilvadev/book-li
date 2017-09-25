import React, { Component } from 'react'
import styled from 'styled-components'

const A = styled.a`
        text-decoration: none;
        color: #bfbfbf;
`

const User = () => {
    return <div className='user-info'>
        <A href='#'>Sair</A>
    </div>;
}

export default User
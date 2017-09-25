import React, { Component } from 'react'
import styled from 'styled-components'
import icon from '../../assets/images/search_icon.png'

//change search for the button

const Input = styled.input`
        border: none;        
        border-bottom: 1px solid #bfbfbf;
`


class Search extends Component {
    constructor() {
        super();
    }

    render() {
        return <div><form>
            <Input type="text" name="search" placeholder="search" />
            <input type='submit' />
            <img src={icon} type='submit' width='20vh' height='20vh'/>
        </form>
        </div>;
    }
}

export default Search
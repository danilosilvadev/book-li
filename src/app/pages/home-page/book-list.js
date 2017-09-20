import React, { Component } from 'react'
import Book from '../../assets/images/book.jpg'

const see = () => {
    return console.log('Book');
}

const BookList = () => {
    return <ul className='nav-list'>
        <li><a href='#'>
            <img src={Book} width='150vh' height='200vh'/></a><br />
            <a href='#'>Change list</a>
            </li>
        <li><a href='#' className='nav'><img src={Book} width='150vh' height='200vh'/> </a></li>
        <li><a href='#' className='nav'><img src={Book} width='150vh' height='200vh'/> </a></li>
        <li><a href='#' className='nav'><img src={Book} width='150vh' height='200vh'/> </a></li>
        </ul>
}

export default BookList
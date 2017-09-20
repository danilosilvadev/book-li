import React, { Component } from 'react'
import Header from './../../components/header/header'
import Menu from './menu'
import BookList from './book-list'


const Home = () => {
    return <div>
        <Header />
        <Menu />
        <BookList />
        </div>;
}

export default Home
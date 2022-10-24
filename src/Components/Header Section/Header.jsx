import React, { useState } from 'react'
import './Header.css'
import HeaderImage from '../../assets/Header Image.jpg'
import books from '../../data/books.json'
import { Link } from 'react-router-dom'
import {RiMenu4Fill} from 'react-icons/ri'
const Header = () => {
    const [theBook, setTheBook] = useState({})
    const [value, setValue] = useState('Default')
    const [dir, setDir] = useState('/')
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        const menu = document.getElementById('menu');
        if (open) {
            menu.classList.remove('active')
            setOpen(false)
        } else {
            menu.classList.add('active')
            setOpen(true)
        }
    }
    const handleInput = () => {
         const inputValue = document.getElementById('input').value
        setValue(inputValue)

    }

    const handleIt = () => {
        books.map((book) => {
            if (book.title === value) {
                setDir(`/book/${value}`)
                document.getElementById('error').innerText = 'Click again'
                }
                setTheBook(book)
        })
        
        if (theBook.title !== value) {
            document.getElementById('error').classList.add('active')
            
        } 
    }
return (
    <>
        <header>
            <div className="black"></div>
            <div className="top" id='home'>
            <div className="logo">Book Store</div>
            <ul className='links'>
                <li><a href="#home">Home</a></li>
                <li><a href="#books">Books</a></li>
                <li><a href="#customers">Customers</a></li>
                <li><a href="#offers">Offers</a></li>
            </ul>
            <div className="login">
               <Link to='/login'>Login/Sign up</Link> 
                </div>
                <div className="menu">
                    <RiMenu4Fill onClick={handleClick}/>
                    <div className="all" id='menu'>
                    <ul className="menu-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#books">Books</a></li>
                        <li><a href="#customers">Customers</a></li>
                        <li><a href="#offers">Offers</a></li>
                    </ul>
                    <div className="menu-login">
                        <Link to='/login'>Login/Sign up</Link> 
                    </div>
                    </div>
                </div>
                <img src={HeaderImage} alt="HeaderImage" />
            </div>
            <div className="title">
                <h1>Choose Your Book</h1>
                <p>
                    That’s the thing about books. They let you travel without moving your feet.
                </p>
                <div className='searchBox'>
                    <input type="text" id='input' maxLength='50' onChange={handleInput} className='search' placeholder="Enter Book's name" />
                    <Link to={dir} onClick={handleIt}><button id='disBtn' className='btn'>Search</button></Link>
                    <div id="error">This book does not exist</div>
                </div>
            </div>
        </header>
    </>
)
}

export default Header

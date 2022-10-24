import React from 'react'
import { Link } from 'react-router-dom'
import './Book.css'
const Book = ({ formats, title, authors, salary, id }) => {
    return (
        <>
        <div className='book' data-id={id} >
            <div className='image'>
                <img src={formats['image/jpeg']} alt="" />
            </div>
            <div className="info">
                <div className="header">
                    <h4 className="name">{title}</h4>
                    <p>${salary}</p>
                </div>
                <h5 className='author'>{authors[0].name}</h5>
                </div>
                <Link to={`/book/${title}`}>
                <button className='btn'>Buy Now</button>
                </Link>
            </div>
            </>
    )
}

export default Book

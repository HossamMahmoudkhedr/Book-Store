import React from 'react'
import books from '../../data/books.json'
import Book from '../Books Section/Book'
import './Books.css'
const Books = () => {
    let x = Math.floor(Math.random() * 20)
    let y = Math.floor(Math.random() * 40)
    if (x >= y || y - x <= 6) {
        x = 0;
        y = 16;
    }
    return (
        <div className='books' id="books">
            <div className="heading">
            <h3>Our Books</h3>
            </div>
            <div className="booksViewer" id="viewer">
                {books.slice(x, y).map((book) => {
                    return <Book key={book.id} {...book} />
                })}
            </div>
        </div>
    )
}

export default Books
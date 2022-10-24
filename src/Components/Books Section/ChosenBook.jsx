import React from 'react'
import './ChosenBook.css'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import books from '../../data/books.json'
import {Link , useParams} from 'react-router-dom'
const ChosenBook = () => {
    const { title } = useParams();

        const newBook = books.find((book) => book.title === title)
    return (
        <div className="Book">
            <div className="allInfo">
                <div className="top">
            <div className="back">
                <Link to={'/Book-Store'}><AiOutlineArrowLeft /></Link>
            </div>
                <div className="image">
                    <img src={newBook.formats['image/jpeg']} alt={newBook.title} />
                </div>
                <div className="textInfo">
                    <div className="left">
                        <h3>{newBook.title}</h3>
                        <p>{newBook.authors[0].name}</p>
                        <h2>${newBook.salary}</h2>
                    </div>
                    <div className="right">
                        <button className='btn'>Add To Cart</button>
                    </div>
                </div>
                </div>
                <div className="about">
                    <div className="more">
                    <h3>Description</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iure tempore omnis earum quia inventore aliquid voluptas facere consequatur quos, provident saepe animi, reiciendis, sit minima asperiores laudantium dicta vel?</p>
                    </div>
                        <div className="bookShelf">
                            <h4>Bookshelves: </h4>
                            <p>{newBook.bookshelves[newBook.bookshelves.length - 1] || `None`}</p>
                        </div>
                </div>
        </div>
      </div>
  )
}


export default ChosenBook


import React from 'react'
import './Footer.css'
import { FaFacebookSquare, FaTwitter } from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
const Footer = () => {
  return (
      <footer>
      <div className="main">
        <div className="logo">Book Store</div>
          <div className="links">
            <h5>Links</h5>    
          <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#books">Books</a></li>
              <li><a href="#customers">Customers</a></li>
              <li><a href="#offers">Offers</a></li>
          </ul>
          </div>
          <div className="about">
              <h5>About Us</h5>
              <p>We offer a tremendous gathering of books in the various classifications of Fiction, Non-fiction, Biographies, History, Religions, Self – Help, Children. We likewise move in immense accumulation of Investments and Management, Computers, Engineering, Medical, College and School content references books proposed by various foundations as schedule the nation over. Other than this, we likewise offer an expansive gathering of E-Books at reasonable valuing.</p>
          </div>
      </div>
      <div className="social">
        <p>You can find us here</p>
        <div className='icons'>
        <FaFacebookSquare />
        <FaTwitter  />
        <GrInstagram />
        </div>
      </div>
      </footer>
  )
}

export default Footer
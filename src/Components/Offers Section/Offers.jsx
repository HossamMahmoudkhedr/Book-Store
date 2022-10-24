import React from 'react'
import './Offers.css'
import offers from '../../assets/offer.jpg'
const Offers = () => {
    return (
        <div className="offers" id='offers'>
            <div className="heading">
                <h3>Book Offers</h3>
            </div>
            <div className="offer">
                <div className="image">
                    <img src={offers} alt="" />
                </div>
                <div className="text">
                    <div className="label">
                       <span>50%</span><span>OFF</span> 
                    </div>
                    <div className="head">
                        <h4>We are providing great offers on books</h4>
                    </div>
                    <div className="par">
                        <p>You can know more about this and get many offers</p>
                    </div>
                    <button className='btn'>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Offers

import React from 'react'
import { FaStar } from 'react-icons/fa'
import './Customer.css'
const Customer = ({ name, opinion, image }) => {
    return (
        <div className="customer">
            <div className="info">
                <div className="image">
                    <img src={image} alt="Personal" />
                </div>
                <div className="text">
                    <h6>{name}</h6>
                    <div className="rate">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
            </div>
            <div className="opinion">
                <p>{opinion}</p>
            </div>
    </div>
    )
}

export default Customer
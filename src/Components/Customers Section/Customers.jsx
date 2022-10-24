import React from 'react'
import customers from '../../data/customers.json'
import Customer from './Customer'
import './Customers.css'
const Customers = () => {
  return (
      <div className="customers" id="customers">
        <div className="heading">
            <h3>Customer Reviews</h3>
        </div>
      <div className="reviews">
        {customers.map((customer) => {
          return <Customer key={customer.id} {...customer} />
        })}
        </div>
      </div>
  )
}

export default Customers
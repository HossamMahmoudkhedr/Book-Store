import React from 'react'
import Header from "./Components/Header Section/Header.jsx";
import Books from './Components/Books Section/Books.jsx'
import Customers from './Components/Customers Section/Customers';
import Offers from './Components/Offers Section/Offers';
import Footer from './Components/Footer Section/Footer.jsx'
import Login from './Components/Login Section/Login';
const Home = () => {
    return (
    <div className="App" id="App">
        <Header />
        <Books />
        <Customers />
        <Offers />
        <Footer />
      </div>
  )
}

export default Home
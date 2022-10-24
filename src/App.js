import React from 'react'
import './App.css';
import Home from './Home';
import Login from './Components/Login Section/Login';
import ChosenBook from './Components/Books Section/ChosenBook';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ChosenBook from './Components/ChosenBook Section/ChosenBook';
function App() {
  return (
    <div >
      <Router>
        <Routes>
         <Route exact path='/'  element={<Home/>} />
         <Route path='/login' element={<Login />} />
         <Route path='/book/:title' element={<ChosenBook />}></Route>
       </Routes>
     </Router>
        
    </div>
  );
}

export default App;

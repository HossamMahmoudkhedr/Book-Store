import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Login.css'
const Login = () => {
    const [login, setLogin] = useState(true)
    const [text, setText] = useState('Don\'t have an account yet?')
    const [button, setButton] = useState('Sign Up Now!')
    const hide = (e) => {
        e.preventDefault()
        document.getElementById('signup-form').classList.toggle('hide')
    }
    const show = (e) => {
        e.preventDefault();
        document.getElementById('signup-form').classList.toggle('hide')
    }
    const change = () => {
        document.getElementById('btn').classList.toggle('rotate')
        if(login) {
            document.getElementById('cover').classList.add('active')
            setText("Have account? Just login!")
            setButton('Login Now!')
            setLogin(false)
        } else {
            document.getElementById('cover').classList.remove('active')
            setText("Don't have an account yet?")
            setButton('Sign Up Now!')
            setLogin(true)
        }
    }
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
    const [error, setError] = useState('')
    const handleLogin = (e) => {
        const email = document.getElementById('login-email')
        const errorBox = document.getElementById('error')
        if (email.value === '' || !(email.value.match(regex))) {
            e.preventDefault()
            setError('The email or the password maybe not correct')
            errorBox.classList.add('active')
        } else {
            errorBox.classList.remove('active')
        }
    }
  return (
      <div className="login-signUp">
          <div className="back">
              <Link to='/Book-Store'><button className='btn'>Back Home</button></Link>
          </div>
          <div className="cover" id='cover'>
              <h2>{text}</h2>
              <button id='btn' className='btn' onClick={change}>{button}</button>
          </div>
          <div className="login">
              <form>
                  <p id='error' className='error'>{error}</p>
                    <h2>Login Now!</h2>
                  <input id='login-email' type="email" name='e-mail' placeholder='E-mail' />
                  <input type="password" name='password' placeholder='Password'/>
                  <button type='submit' onClick={handleLogin} className='btn'>Login</button>
                  <div className="moreText">    
                  <p>Or if you dont't have an account</p>
                  <button id='hideBtnLog' onClick={show} className='btn'>Click Here</button>
                  </div>
              </form>
          </div>
          <div className="signUp" id='signup-form'>
              <form>
                  <h2>Fill the form below to sign up</h2>
                  <div className="nameSection">    
                  <input type="text" name='First Name' placeholder='First Name' />
                  <input type="text" name='Last Name' placeholder='Last Name' />
                  </div>
                  <input type="email" name='e-mail' placeholder='E-mail' />
                  <input type="password" name='password' placeholder='Password' />
                  <input type="password" name='confirm password' placeholder='Confirm Password' />
                  <div className="gender">    
                  <label htmlFor="male">Male</label>
                  <input type="radio" name='gender' value='male' id='male' />
                  <label htmlFor="female">Female</label>
                  <input type="radio" name='gender' value='female' id='female' />
                  </div>
                  <div className="birthday">    
                  <label htmlFor="birthday">Birthday: </label>
                  <input type="date" name="birthday" id="birthday" />
                  </div>
                  <button type='submit' className='btn'>Sign Up</button>
                  <div className="moreText">    
                  <p>Or if you have already an account</p>
                  <button id='hideBtn' onClick={hide} className='btn'>Click Here</button>
                  </div>
              </form>
          </div>
    </div>
  )
}

export default Login
import React from 'react'
import './Css/LoginSignUp.css'
const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type='text' placeholder='Your Name'/>
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='password'/>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'> Already have an account?<span>Login</span></p>
        <div className='loginsignup-agree'>
          <input type="checkbox" name='' id=''/>
          <p>By Continuing, I Agree to the Terms and Condition</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignUp
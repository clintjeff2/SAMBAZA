import React from 'react';
import AuthBackground from '../../../components/AuthBackground';
import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';


import './style/main.scss';

function SignUp() {
  return (
    <div className="sign-up">
        <AuthBackground />
        <div className="sign-up--content">
            <h1 className="primary-header">
              Sign up
            </h1>
            <span className="text">
              Enter your name, email address and password to create your account.
            </span>
            <div className="name flex-col justify gap-1">
              <span className="title">Full Name</span>
              <input type="text"  placeholder='Enter Names'/>
            </div>
            <div className="email flex-col justify gap-1">
              <span className="title">Email</span>
              <input type="text"  placeholder='Enter Email'/>
            </div>
            <div className="password flex-col justify gap-1">
              <span className="text">Password</span>
              <input type="password" name="" id="" placeholder='Enter Password'/>
            </div>
            <div className="password cpassword flex-col justify gap-1">
              <span className="text">Confirm Password</span>
              <input type="password" name="" id="" placeholder='Enter Password Again'/>
            </div>
            <div className='submit flex align'>
              <div className="checkbox">
                <input type="checkbox" name="" id="" />
                <span>
                  I accept
                  <Link to='/dashboard/authentication/terms-conditions' className='link'>
                    Terms and conditions
                  </Link>
                </span>
              </div>
              <button className="btn" type='submit'>sign up</button>
            </div>
            <div className="no-account flex align">
              <div className='no-account--signup'>
                <span className="text">Already have an account? </span>
                <Link to='/dashboard/authentication/login' className='link'>
                  log in
                </Link>
              </div>
              <div className='social flex align gap-1'>
                <button className="btn btn-primary-light">
                  <FiFacebook />
                </button>
                <button className="btn btn-primary-light">
                  <FiTwitter />
                </button>
                <button className="btn btn-primary-light">
                  <FiInstagram />
                </button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp
import React from 'react';
import AuthBackground from '../../../components/AuthBackground';
import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

import './style/main.scss';

function SignIn() {
  return (
    <div className="sign-in">
        <AuthBackground />
        <div className="sign-in--content">
            <h1 className="primary-header">
              Sign in
            </h1>
            <span className="text">
              Enter your email address and password to access your account.
            </span>
            <div className="email flex-col justify gap-1">
              <span className="title">Email</span>
              <input type="text"  placeholder='Enter Email'/>
            </div>
            <div className="password flex-col justify gap-1">
              <div className='flex align'>
                <span className="text">Password</span>
                <Link to='/dashboard/authentication/recover-password' className='link'>
                  Forgot Password ?
                </Link>
              </div>
              <input type="password" name="" id="" placeholder='Enter Password'/>
            </div>
            <div className='submit flex align'>
              <div className="checkbox">
                <input type="checkbox" name="" id="" />
                <span>Remember Me</span>
              </div>
              <button className="btn" type='submit'>sign in</button>
            </div>
            <div className="no-account flex align">
              <div className='no-account--signup'>
                <span className="text">Don't have an account?</span>
                <Link to='/dashboard/authentication/register' className='link'>
                  sign up
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

export default SignIn
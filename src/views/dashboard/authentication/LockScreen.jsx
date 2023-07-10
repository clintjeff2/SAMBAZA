import React from 'react';
import AuthBackground from '../../../components/AuthBackground';

import './style/main.scss';

function LockScreen() {
  return (
    <div className="lock-screen">
      <AuthBackground />
      <div className="sign-up--content">
        <h2 className="primary-header">
          Hi! Chloe Shurper
        </h2>
        <span className="text">
          Enter your admin password to get additional rights.
        </span>
        <div className="password flex-col justify gap-1">
          <span className="text">Password</span>
          <input type="password" name="" id="" placeholder='Enter Password'/>
        </div>
        <button className="btn">
          Sign in
        </button>
      </div>
    </div>
  )
}

export default LockScreen
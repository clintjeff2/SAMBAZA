import React from 'react';
import AuthBackground from '../../../components/AuthBackground';

import './style/main.scss';

function RecoverPassword() {
  return (
    <div className="recover-password">
      <AuthBackground />
      <div className="sign-up--content">
        <h1 className="primary-header">
          Recover Password
        </h1>
        <span className="text">
          Enter your email address and we'll send you an email with instructions to reset your password.
        </span>
        <div className="email flex-col justify gap-1">
          <span className="title">Email address</span>
          <input type="text"  placeholder='Enter Email'/>
        </div>
        <button className="btn">
          send
        </button>
      </div>
    </div>
  )
}

export default RecoverPassword
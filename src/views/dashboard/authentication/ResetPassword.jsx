import React from 'react';
import AuthBackground from '../../../components/AuthBackground';

import './style/main.scss';

function ResetPassword() {
  return (
    <div className="reset-password">
      <AuthBackground />
      <div className="sign-up--content">
        <h1 className="primary-header">
          Reset Password
        </h1>
        <div className="password flex-col justify gap-1">
          <span className="text">Password</span>
          <input type="password" name="" id="" placeholder='Enter Password'/>
        </div>
        <div className="password cpassword flex-col justify gap-1">
          <span className="text">Confirm Password</span>
          <input type="password" name="" id="" placeholder='Enter Password Again'/>
        </div>
        <button className="btn">
          submit
        </button>
      </div>
    </div>
  )
}

export default ResetPassword
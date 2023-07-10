import React from 'react';
import AuthBackground from '../../../components/AuthBackground';
import { Link } from 'react-router-dom';
import './style/main.scss';

function ConfirmMail() {
  return (
    <div className="confirm-mail">
      <AuthBackground />
      <div className="sign-up--content">
        <h1 className="primary-header">
          Success !
        </h1>
        <span className="text">
          An email has been send to youremail@domain.com. Please check for an email from us and click on the included link to reset your password.
        </span>
        <Link to='/dashboard/authentication/login' className='button-link'>
          <button className="btn">
            sign in
          </button>
        </Link>

      </div>
    </div>
  )
}

export default ConfirmMail
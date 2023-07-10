import React from 'react'
import { Link } from 'react-router-dom';

import './../styles/error-500.scss';

import { AiOutlineHome } from 'react-icons/ai';

function Error500() {
    return (
        <div className="error-500 flex-col align justify">
            <div className="logo-pic">
                <img src="" alt="" />
            </div>
            <h1 className="primary-header">
                Oops! This page is not working.
            </h1>
            <span className="text">
                There might be an internal server error.
            </span>
            <Link className='link' to='/dashboard/index'>
                <button className="btn flex gap-1">
                    <span>
                        Back Home 
                    </span>
                    < AiOutlineHome />
                </button>
            </Link>
        </div>
    );
}

export default Error500;


import React from 'react';
import { Link } from 'react-router-dom';

import './../styles/error-404.scss';
import { AiOutlineHome } from 'react-icons/ai';

function Error404() {
    return (
        <div className="error-404 flex-col align justify">
            <div className="logo-pic">
                <img src="" alt="" />
            </div>
            <h1 className="primary-header">
                Oops! This page is not found.
            </h1>
            <span className="text">
                The requested page dose not exist.
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

export default Error404;

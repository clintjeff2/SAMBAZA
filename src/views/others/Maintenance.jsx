import React from 'react';

import './scss/maintenance.scss';

import { BsQuestionCircle, BsInfoCircle } from 'react-icons/bs';
import { BiTime } from 'react-icons/bi';

function Maintenance() {
    return (
        <div className="maintenance flex-col align justify">
            <div className="logo-pic">
                <img src="" alt="" />
            </div>
            <h1 className="primary-header">
                We are Currently Performing Maintenance
            </h1>
            <span className="text">
                Please check back in sometime
            </span>
            <div className="maintenance-item flex align justify gap-2">
                <div className="flex-col align justify">
                    <h2 className="secondary-header">
                        Why is the Site Down?
                    </h2>
                    <span className='maintenance-icon'>
                        <BsQuestionCircle />
                    </span>
                    <span className="text">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </span>
                </div>
                <div className="flex-col align justify">
                    <h2 className="secondary-header">
                        Why is the Site Down?
                    </h2>
                    <span className='maintenance-icon'>
                        <BiTime />
                    </span>
                    <span className="text">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </span>
                </div>
                <div className="flex-col align justify">
                    <h2 className="secondary-header">
                        Why is the Site Down?
                    </h2>
                    <span className='maintenance-icon'>
                        <BsInfoCircle />
                    </span>
                    <span className="text">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Maintenance;

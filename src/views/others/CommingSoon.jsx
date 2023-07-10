import React from 'react';

import './scss/comming-soon.scss';
function CommingSoon() {
    return (
        <div className="comming-soon flex-col align justify">
            <div className="logo-pic">
                <img src="" alt="" />
            </div>
            <h1 className="primary-header">
                Stay tunned! We're launching soon.
            </h1>
            <span className="text">
                We are working very hard to give you the best experience possible!
            </span>
            <div className="timeline flex align justify gap-2">
                <div className="flex-col align justify days">
                    <span className='value'>
                        -500
                    </span>
                    <span className="text">
                        Days
                    </span>
                </div>
                <div className="flex-col align justify hours">
                    <span className='value'>
                        18
                    </span>
                    <span className="text">
                        Hours
                    </span>
                </div>
                <div className="flex-col align justify minutes">
                    <span className='value'>
                        34
                    </span>
                    <span className="text">
                        Minutes
                    </span>
                </div>
                <div className="flex-col align justify seconds">
                    <span className='value'>
                        40
                    </span>
                    <span className="text">
                        seconds
                    </span>
                </div>
            </div>
            <div className="subscribe">
                <form action="" className='flex align'>
                    <input type="text" placeholder='Enter email address'/>
                    <button className="btn">
                        Subscribe
                    </button>
                </form>
            </div>

        </div>
    )
}
export default CommingSoon;
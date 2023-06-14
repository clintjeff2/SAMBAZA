import React from 'react';

import './component-styles/reddit.scss';

function Reddit(props) {
  return (
    <div className='reddit flex align'>
        <div className="profile-picture">
            <img src="" alt="" />
        </div>
        <div className="profile-info flex-col justify">
            <span className="name">
                {props.name}
            </span>
            <span className="time">
                {props.time} ago
            </span>
        </div>
    </div>
  )
}

export default Reddit
import React from 'react';

import './component-styles/post-card.scss';

function PostCardHeader(props) {
  return (
    <header className="post-card--header flex justify--between align">
        <div className='identity flex align'>
            <div className="profile-picture">
                <img src="" alt="" />
            </div>
            <div className="profile-info flex-col">
                <div className="profile-info-name">
                    <span className="username">
                        {props.posterName}
                    </span>
                    <span className="post-title">
                        {props.postTitle}
                    </span>
                </div>
                <div className="time">
                    1 hour ago
                </div>
            </div>
        </div>
        <div className="action">
            ...
        </div>

    </header>

  )
}

export default PostCardHeader;
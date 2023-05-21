import React from 'react';

import './component-styles/comments.scss';

function Comments() {
  return (
    <div className='comments'>
        <div className="comments-content flex">
            <div className="profile-picture">
                <img src="" alt="" />
            </div>
            <div className="comments-content--info flex-col">
                <span className="username">
                    juan peter
                </span>
                <span className="text">
                    Lorem ipsum dolor sit amet consectetur.
                </span>
                <span className="actions flex align">
                    <span className="likes">
                        likes
                    </span>
                    <span className="comment">
                        comments
                    </span>
                    <span className="translate">
                        translate
                    </span>
                    <span className="time">
                        5 mins
                    </span>
                </span>
            </div>
        </div>
        
    </div>
  )
}

export default Comments
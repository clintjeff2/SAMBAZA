import React from 'react';

import './component-styles/gen-reddit.scss';

function GenReddit(props) {
  return (
    <div className="gen-reddit flex align gap-1">
        <div className="picture">
            <img src="" alt="" />
        </div>
        <div className="info flex-col justify">
            <span className="title">
                {props?.title}Testing Team
            </span>
            <span className="message">
                {props?.message}Lorem ipsum dolor sit amet
            </span>
        </div>
    </div>
  )
}

export default GenReddit
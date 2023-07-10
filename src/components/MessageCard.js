import React from 'react';

import './component-styles/message-card.scss';

function MessageCard(props) {
  return (
    <div className={`message-card flex-col ${props.sender}`}>
        <span className="message">
            {props.children}
        </span>
        <span className="time">
            {props.time}15/06/2023|07:59pm
        </span>
    </div>
  )
}

export default MessageCard
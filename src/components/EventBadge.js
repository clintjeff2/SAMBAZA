import React from 'react';

import './component-styles/event-badge.scss';

function EventBadge(props) {
  return (
    <div className='event-badge'>
        {props.children}
    </div>
  )
}

export default EventBadge
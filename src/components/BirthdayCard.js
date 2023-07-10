import React from 'react';

import './component-styles/birthday-card.scss';

function BirthdayCard(props) {
  return (
    <div className="birthday-card flex align gap-3">
        <div className="picture">
            <img src="" alt="" />
        </div>
        <div className="birthday-info flex-col justify">
            <span className="name">Peter Jury</span>
            <span className="birthday">Today</span>
        </div>
        <button className="btn btn-primary">
            Post Card
        </button>
    </div>
  )
}

export default BirthdayCard
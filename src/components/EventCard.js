import React from 'react';

import './component-styles/event-card.scss';

function EventCard() {
  return (
    <div className="event-card">
        <img src="" alt="" className="event-image" />
        <div className="event-info flex">
            <div className="date">
                <span className="month">
                    Jan
                </span>
                <span className="day">
                    24
                </span>
            </div>
            <div className="content">
                <span className="title">
                    Meetings and Conventions
                </span>
                <span className="text">
                    Lorem ipsum dolor sit amet consectetur.
                </span>
                <div className="pictures flex align">
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default EventCard
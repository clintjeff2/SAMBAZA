import React from 'react';
import PictureCard from './PictureCard';

import './component-styles/friend-card.scss';
import './../assets/scss/components/utils.scss';

function FriendCard(props) {
  return (
    <div className="friend-card">
        <PictureCard class = '' height='11rem' className="friend-card--head"/>
        <div className="description flex align">
            <div className="profile-picture">
                <img src="" alt="" />
            </div>
            <div className="profile-info flex-col">
                <span className="name">
                    {props.name} 
                </span>
                <span className="passion">
                    {props.passion} 
                </span>
                <span className="content">
                    {props.content} 
                </span>
            </div>
        </div>
        <div className="following">
            <button className='btn'>following</button>
        </div>
    </div>
  )
}

export default FriendCard;

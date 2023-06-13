import React from 'react';

import PictureCard from './PictureCard';

import './component-styles/group-card.scss';

function GroupCard(props) {
  return (
    <div className="group-card">
        <PictureCard class='' height='12rem'/>
        <div className="group-info flex-col justify align">
            <div className="group-profile">
                <img src="" alt="" />
            </div>
            <div className="group-title">
                Designer
            </div>
            <div className="group-desc">
                Lorem ipsum dolor sit amet.
            </div>
        </div>
        <div className="group-details flex align justify">
            <div className="feature feature-post flex-col align">
                <span className='post'>Post</span>
                <span>{props.numPost} 20k</span>
            </div>
            <div className="feature feature-member flex-col align">
                <span className='member'>Member</span>
                <span>{props.numMember} 271k</span>
            </div>
            <div className="feature feature-visit flex-col align">
                <span className='visit'>Visit</span>
                <span>{props.numVisit} 2k</span>
            </div>
        </div>
        <div className="active-profiles flex justify align">
            <div className="profile">
                <img src="" alt="" />
            </div>
            <div className="profile">
                <img src="" alt="" />
            </div>
            <div className="profile">
                <img src="" alt="" />
            </div>
            <div className="profile">
                <img src="" alt="" />
            </div>
            <div className="profile">
                <img src="" alt="" />
            </div>
            <div className="profile">
                <img src="" alt="" />
            </div>
        </div>
        <div className="join-group flex justify">
            <buton className="btn btn-long">
                join
            </buton>
        </div>
    </div>
  )
}

export default GroupCard;
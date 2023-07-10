import React from 'react';

import './css/left-nav-style.scss';
import './../../assets/scss/components/display.scss';

import { NavLink } from 'react-router-dom';

import * as BootStrapIcon from 'react-icons/bs';
// import * as GrommetIcon from 'react-icons/gr';
import * as IonIcon5 from 'react-icons/io5';
import * as GameIcon from 'react-icons/gi';
import * as HeroIcons from "react-icons/hi2";
import { FaQuestion } from 'react-icons/fa';

function LeftNav() {

  return (
    <div className='left-navigation'>
      <ul className='left-navigation--list flex-col'>
        <li className='left-navigation--list-item'>
          <NavLink className='item-link' to='/dashboard/index'>
            <div className="nav-item flex">
              <BootStrapIcon.BsNewspaper className='nav-item--icon'/>
              <span className="nav-item--name">Newsfeed</span>
            </div>
          </NavLink>
        </li>
        <li className='left-navigation--list-item'>
          <NavLink  className='item-link' to='/dashboard/profile'>
            <div className="nav-item flex">
              <BootStrapIcon.BsPerson className='nav-item--icon'/>
              <span className="nav-item--name">Profile</span>
            </div>
          </NavLink>
        </li>
        <li className='left-navigation--list-item'>
          <NavLink to='/dashboard/friend-list' className='item-link'>
            <div className="nav-item flex">
              <GameIcon.GiThreeFriends className='nav-item--icon'/>
              <span className="nav-item--name">Friend List</span>
            </div>
          </NavLink>
        </li>
        <li className='left-navigation--list-item'>
          <NavLink to='/dashboard/people-profile' className='item-link'>
            <div className="nav-item flex">
              <GameIcon.GiThreeFriends className='nav-item--icon'/>
              <span className="nav-item--name">Friend Profile</span>
            </div>
          </NavLink>
        </li>
        <li className='left-navigation--list-item'>
          <NavLink to='/dashboard/groups' className='item-link'>
            <div className="nav-item flex">
              <HeroIcons.HiOutlineUserGroup className='nav-item--icon'/>
              <span className="nav-item--name">Groups</span>
            </div>
          </NavLink>
        </li>
        <li className='left-navigation--list-item'>
          <NavLink to='/dashboard/profile-images' className='item-link'>
            <div className="nav-item flex">
              <BootStrapIcon.BsCardImage className='nav-item--icon'/>
              <span className="nav-item--name">Profile Images</span>
            </div>
          </NavLink>
        </li>
        <li className='left-navigation--list-item'>
          <NavLink to='/dashboard/videos' className='item-link'>
            <div className="nav-item flex">
              <BootStrapIcon.BsCameraVideo className='nav-item--icon'/>
              <span className="nav-item--name">Profile Video</span>
            </div>
          </NavLink>
        </li>
        <li className='left-navigation--list-item'>
          <NavLink to='/dashboard/events' className='item-link'>
            <div className="nav-item flex">
              <BootStrapIcon.BsCalendar3Event className='nav-item--icon'/>
              <span className="nav-item--name">Events</span>
            </div>
          </NavLink>
        </li>
        <li className='left-navigation--list-item'>
          <NavLink to='/dashboard/notifications' className='item-link'>
            <div className="nav-item flex">
              <BootStrapIcon.BsBell className='nav-item--icon'/>
              <span className="nav-item--name">Notifications</span>
            </div>
          </NavLink>
        </li>
        <li className='left-navigation--list-item'>
          <NavLink to='/dashboard/files' className='item-link'>
            <div className="nav-item flex">
              <BootStrapIcon.BsFileEarmark className='nav-item--icon'/>
              <span className="nav-item--name">Files</span>
            </div>
          </NavLink>
        </li>
        <li className='left-navigation--list-item'>
          <NavLink to='/dashboard/tutor-request' className='item-link'>
            <div className="nav-item flex">
              <IonIcon5.IoGitPullRequestOutline className='nav-item--icon'/>
              <span className="nav-item--name">Tutor Request</span>
            </div>
          </NavLink>
        </li>
        <li className='left-navigation--list-item'>
          <NavLink to='/dashboard/chats' className='item-link'>
            <div className="nav-item flex">
              <BootStrapIcon.BsChatDots className='nav-item--icon'/>
              <span className="nav-item--name">Chats</span>
            </div>
          </NavLink>
        </li>
        <li className='left-navigation--list-item'>
          <NavLink to='/dashboard/todos' className='item-link'>
            <div className="nav-item flex">
              <BootStrapIcon.BsCalendarCheck className='nav-item--icon'/>
              <span className="nav-item--name">Todos</span>
            </div>
          </NavLink>
        </li>
        <li className='left-navigation--list-item'>
          <NavLink to='/dashboard/birthdays' className='item-link'>
            <div className="nav-item flex">
              <GameIcon.GiStairsCake className='nav-item--icon'/>
              <span className="nav-item--name">Birthdays</span>
            </div>
          </NavLink>
        </li>
        <li className='left-navigation--list-item'>
          <NavLink to='/dashboard/calendar' className='item-link'>
            <div className="nav-item flex">
              <BootStrapIcon.BsCalendar className='nav-item--icon'/>
              <span className="nav-item--name">Calendar</span>
            </div>
          </NavLink>
        </li>
        <li className='left-navigation--list-item'>
          <NavLink to='/dashboard/emails' className='item-link'>
            <div className="nav-item flex">
              <BootStrapIcon.BsEnvelope className='nav-item--icon'/>
              <span className="nav-item--name">Emails</span>
            </div>
          </NavLink>
        </li>
        <li className='left-navigation--list-item'>
          <NavLink to='/dashboard/faq' className='item-link'>
            <div className="nav-item flex">
              <FaQuestion className='nav-item--icon'/>
              <span className="nav-item--name">FAQ</span>
            </div>
          </NavLink>
        </li>
        
      </ul>
    </div>
  )
}

export default LeftNav
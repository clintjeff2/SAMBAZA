import React from 'react';

import './css/right-nav-style.scss';
import './../../assets/scss/components/display.scss';

import { Link } from 'react-router-dom';

import Data_table from './../../assets/data/user-data';

function RightNav() {
  return (
    <div className='right-navigation'>
      <ul className='right-navigation--list flex-col'>
        <li className='right-navigation--list-item'>
          <Link className='nav-links'>
            <div className="nav-item flex">
              <div className="nav-item--picture">
                <img src="" alt="" />
                <span className="status">
                  <span className="status-online"></span>
                </span>
              </div>
              <div className="nav-item--name flex-col">
                <span className="name">Eve Dallas</span>
                <span className="role">Member</span>
              </div>
            </div>
          </Link>
        </li>
        {Data_table.map((item) => {
          return <li className='right-navigation--list-item' key={item.name}>
          <Link className='nav-links'>
            <div className="nav-item flex">
              <div className="nav-item--picture">
                <img src="" alt="" />
                <span className="status">
                  <span className="status-online"></span>
                </span>
              </div>
              <div className="nav-item--name flex-col">
                <span className="name">{item.name}</span>
                <span className="role">Admin</span>
              </div>
            </div>
          </Link>
        </li>
        })}
        
      </ul>
    </div>
  )
}

export default RightNav

import React from 'react';
import '../../assets/scss/components/display.scss';
import './css/main-nav-style.scss';

import { AiOutlineMenu, AiOutlineMail, AiOutlineHome, AiOutlineTeam, AiOutlineBell, AiOutlineSearch } from "react-icons/ai";

function MainNav() {
  const handleLeftNavToggle = () =>{
    //COLLECTING THE LEFT NAVIGATION BAR, BODY AND LEFT NAVIGATION ITEM NAMES
    let leftNav = document.querySelector('.left-nav');
    let sectionBody = document.querySelector('.body');
    let leftNavElements = document.querySelectorAll('.nav-item--name');

    //REMOVING THE LEFT NAVIGATION ITEM NAMES ON TOGGLE
    leftNavElements.forEach(item => {
      //SOME CHECKS
      // console.log(item.classList.contains('item-display'), item);
      item.classList.contains('item-display')? item.classList.remove('item-display'): item.classList.add('item-display');
    }); 
    //SOME CHECKS: -->> CHECKING IF THE TOGGLE WAS CLICKED THEN MAKING NECESSARY CHANGES
    // console.log(leftNav, sectionBody);
    // console.log(leftNav.classList.contains('left-nav--toggle'), sectionBody.classList);

    //
    leftNav.classList.contains('left-nav--toggle')? leftNav.classList.remove('left-nav--toggle'): leftNav.classList.add('left-nav--toggle');
    sectionBody.classList.contains('body--toggle')? sectionBody.classList.remove('body--toggle'): sectionBody.classList.add('body--toggle');

  }
  return (
    <header className='flex'>
        <div className="main-header--item media flex">
          <div className="media--logo">
            <img src="" alt="" className="logo" />
          </div>
          <span className="media--name flex">sambaza</span>
        </div>
        <div className="main-header--item left-nav--toggle">
          <span><AiOutlineMenu onClick={handleLeftNavToggle}/></span>
        </div>
        <div className="main-header--item search flex">
          <form action="" className='flex'>
            <input type="text" placeholder='Search here...' className='search--input'/>
            <AiOutlineSearch className='icon-blue' />
          </form>
        </div>
        <div className="main-header--item home">
          <AiOutlineHome className='icon-blue' />
        </div>
        <div className="main-header--item friend-request">
          <AiOutlineTeam className='icon-blue' />
        </div>
        <div className="main-header--item notification">
          <AiOutlineBell className='icon-blue' />
        </div>
        <div className="main-header--item messages">
          <AiOutlineMail className='icon-blue' />
        </div>
        <div className="main-header--item user flex">
          <div className="user--profile">
            <img src="" alt="" className="profile" />
          </div>
          <div className="user--name">YourYourYour Name</div>
        </div>
    </header>
  )
}

export default MainNav
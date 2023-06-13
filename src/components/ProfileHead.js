import React from 'react';
import profilePictureBackground from "./../assets/images/default-profile-background.jpg";

import './component-styles/profile-header.scss';

import { BsFillCameraFill } from 'react-icons/bs';

function ProfileHead() {
    const popUpChoseFiles = (item) =>{
        document.getElementById(item).click();
    }
    const HandleSubmit = (e) =>{
        console.log(e.target.value);
    }
  return (
    <>
        <div className="profile-picture--background">
            <img src={profilePictureBackground} alt="" className='background'/>
            <form action="" encType='multipart/form-data' className='upload-pictures'>
                <div className="upload-background flex-col justify align">
                    <input type="file" id="profile-background" onChange={HandleSubmit} />
                    <BsFillCameraFill className='btn-camera' onClick={() => popUpChoseFiles("profile-background")}/> 
                </div>
                <div className="upload-profile">
                    <input type="file" id="profile-picture" onChange={HandleSubmit}/>
                    <img src="https://images.unsplash.com/photo-1682128281178-24b8b96c4c3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className='picture' onClick={() => popUpChoseFiles("profile-picture")}/>
                </div>
            </form>
        </div>
    </>
  )
}

export default ProfileHead
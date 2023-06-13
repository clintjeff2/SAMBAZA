import React from 'react';

import './../assets/scss/components/display.scss';
import './component-styles/create-post-card.scss';
import CardHeader from './CardHeader';


function CreatePostCard() {
  return (
    <div>
        <CardHeader title="create post">
            ...
        </CardHeader>
        <div className="create-content">
            <form action="" className='flex'>
                <div className="profile-picture">
                    <img src="" alt="" />
                </div>
                <input type="text" className='create-content--text' placeholder='Write post text here...'/>
            </form>
        </div>
    </div>
  )
}

export default CreatePostCard
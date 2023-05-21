import React from 'react';
import PostCardHeader from './PostCardHeader';
import Comments from './Comments';

function PostCard() {
  return (
    <div className='post-card'>
        <PostCardHeader postTitle="Advancements in Technology" posterName="Juan Peter" />
        <div className="post-card-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas quam impedit eligendi pariatur rem, magni vitae, excepturi exercitationem reiciendis laborum aliquam nulla animi voluptatem tempore tenetur perspiciatis optio. Esse, repellat!
        </div>
        <div className="post-card-content">
            <div className="post-card-content--image">
                <img src="" alt="" />
            </div>
            <div className="post-card-content--actions flex">
                <span className="likes">
                    70 likes
                </span>
                <span className="comment">
                    20 comments
                </span>
                <span className="share">
                    share
                </span>
            </div>
        </div>
        <Comments />
        <Comments />
        <form action="" className='comment-message'>
            <input type="text" className='comment-message-text' placeholder='Tab enter to send after typing' />
        </form>
    </div>
  )
}

export default PostCard
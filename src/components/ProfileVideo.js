import React from 'react';

import video1 from './../assets/videos/movie.mp4';

//importing ICONS
import { BsFillPencilFill } from 'react-icons/bs';
import { RiDeleteBinFill } from 'react-icons/ri';
import { AiOutlineShareAlt, AiOutlineLike, AiOutlineComment} from 'react-icons/ai';


import './component-styles/profile-video.scss';

function ProfileVideo() {
  return (
    <div className='profile-video'>
        {/* <video controls>
          <source src="https://www.youtube.com/embed/tgbNymZ7vqY" type='video/mp4'/>
        </video> */}
        <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY">

        </iframe>
        <div className="actions pic-actions flex justify align">
          <span className="edit">
              < BsFillPencilFill />
          </span>
          <span className="delete">
              < RiDeleteBinFill />
          </span>
        </div>
        <div className="actions reactions flex align">
          <span className="likes">
              60 < AiOutlineLike />
          </span>
          <span className="comment">
              20 < AiOutlineComment />
          </span>
          <span className="share">
              10 < AiOutlineShareAlt />
          </span>
        </div>
    </div>
  )
}

export default ProfileVideo;
import React from 'react';

//importing ICONS
import { BsFillPencilFill } from 'react-icons/bs';
import { RiDeleteBinFill } from 'react-icons/ri';
import { AiOutlineShareAlt, AiOutlineLike, AiOutlineComment} from 'react-icons/ai';

import './component-styles/images-card.scss';
function ImagesCard() {
  return (
    <div className="images-card">
        <div className="image">
            <img src="" alt=""/>
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
    </div>
  )
}

export default ImagesCard
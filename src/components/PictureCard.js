import React from 'react';
import './component-styles/pic-card.scss';

function PictureCard(props) {
  return (
    <div className={`pic-card ${ props.class}` }>
        <div className="picture" style={{height: `${props.height}`}}>
            <img src="" alt="" />
        </div>
    </div>
  )
}

export default PictureCard;
import React from 'react';

import './component-styles/card-header.scss';
import './../assets/scss/components/display.scss';

function CardHeader(props) {
  return (
    <div className='card-header flex align'>
        <div className="card-header--item title">
            {props.title}
        </div>
        <div className="card-header--item action">
            {props.children}
        </div>
    </div>
  )
}

export default CardHeader;
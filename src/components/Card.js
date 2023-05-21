import React from 'react';
import '../assets/scss/components/component-shadows.scss';

const Card = (props) => { return (<div className={`content ${props.class}`} >{props.children}</div>)};
Card.MainNav = (props) => { return (<div className='main-nav'>{props.children}</div>)};
Card.LeftNav = (props) => { return (<div className='left-nav'>{props.children}</div>)};
Card.RightNav = (props) => { return (<div className='right-nav'>{props.children}</div>)};

export default Card

import React from 'react';
import './css/default.scss';
import Card from '../Card';

import MainNav from './MainNav';
import LeftNav from './LeftNav';
import RightNav from './RightNav';

function DefaultStructure(props) {
  return (
    <>
      <div className="container">
        <nav className="header">
          <Card.MainNav>
            <MainNav />
          </Card.MainNav>
        </nav>
        <section className="main">
          <nav className="left">
            <Card.LeftNav>
              <LeftNav />
            </Card.LeftNav>      
          </nav>
          <section className="body">
            {props.children}
          </section>
          <nav className="right">
            <Card.RightNav>
              <RightNav />
            </Card.RightNav>
          </nav>
        </section>
      </div>
    </>
  )
}

export default DefaultStructure;
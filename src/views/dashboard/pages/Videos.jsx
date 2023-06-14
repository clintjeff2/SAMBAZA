import React from 'react';

import Card from '../../../components/Card';
import DefaultStructure from './../../../components/dashboard/Default';
import ProfileVideo from '../../../components/ProfileVideo';

import './../styles/videos.scss';
function Videos() {
  return (
    <DefaultStructure>
        <Card class="content-s">
          <div className="profile-videos flex align">
            <ProfileVideo />
            <ProfileVideo />
            <ProfileVideo />

            <ProfileVideo />
            <ProfileVideo />
            <ProfileVideo />

            <ProfileVideo />
            <ProfileVideo />
            <ProfileVideo />

            <ProfileVideo />
            <ProfileVideo />
            <ProfileVideo />

            <ProfileVideo />
            <ProfileVideo />
            <ProfileVideo />

            <ProfileVideo />
            <ProfileVideo />
            <ProfileVideo />
          </div>
        </Card>
    </DefaultStructure>
  )
}

export default Videos
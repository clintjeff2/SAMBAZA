import React from 'react';

import DefaultStructure from '../../components/dashboard/Default';
import Card from '../../components/Card';
import CreatePostCard from '../../components/CreatePostCard';
import CardHeader from '../../components/CardHeader';
import PostCard from '../../components/PostCard';
import Reddit from '../../components/Reddit';
import EventBadge from '../../components/EventBadge';

import './../../assets/scss/components/display.scss';

import './styles/main.scss';
import './../../assets/scss/components/utils.scss';
import PictureCard from '../../components/PictureCard';

function NewsFeedIndex() {
  return (
    <DefaultStructure>
      <Card class="content-s flex justify--between body-container" >
        <div className="flex-width--lg body-container--main flex-col">
          <CreatePostCard />
          <PostCard />
        </div>
        <div className="flex-width--md body-container--side flex-col">
          <EventBadge>
            <CardHeader title="events">

            </CardHeader>
            <Reddit name="fun events and festival" time="37 mins" />
            <Reddit name="react workshop" time="3 days" />
            <Reddit name="tech in advance" time="3 mins" />
          </EventBadge>
          <EventBadge>
            <CardHeader title="suggested pages">
              ...
            </CardHeader>

            <Reddit name="about tutors" time="24 mins"/>
            <PictureCard class='pic-line' />

            <Reddit name="about tutors" time="24 mins" />
            <PictureCard class='pic-line' />
          </EventBadge>
        </div>
      </Card>
    </DefaultStructure>

  )
}

export default NewsFeedIndex;
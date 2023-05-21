import React from 'react';

import DefaultStructure from '../../components/dashboard/Default';
import Card from '../../components/Card';
import CreatePostCard from '../../components/CreatePostCard';
import CardHeader from '../../components/CardHeader';
import PostCard from '../../components/PostCard';

import './../../assets/scss/components/display.scss';

import './styles/main.scss';

function NewsFeedIndex() {
  return (
    <DefaultStructure>
      <Card class="content-s flex justify--between body-container" >
        <div className="flex-width--lg body-container--main flex-col">
          <CreatePostCard />
          <PostCard />
        </div>
        <div className="flex-width--md body-container--side flex-col">
          <CardHeader title="events">

          </CardHeader>
          <CreatePostCard />
        </div>
      </Card>
    </DefaultStructure>

  )
}

export default NewsFeedIndex;
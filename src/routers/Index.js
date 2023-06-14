import React from 'react';
import {Routes, Route} from 'react-router-dom';
import DefaultStructure from '../components/dashboard/Default';

import NewsFeedIndex from '../views/dashboard/index';
import UserProfile from '../views/dashboard/pages/UserProfile';
import FriendList from '../views/dashboard/pages/FriendList';
import PeopleProfile from '../views/dashboard/pages/PeopleProfile';
import Groups from '../views/dashboard/pages/Groups';
import ProfileImages from '../views/dashboard/pages/ProfileImages';
import Videos from '../views/dashboard/pages/Videos';
import Events from '../views/dashboard/pages/Events';
import Notification from '../views/dashboard/pages/Notification';
import Files from '../views/dashboard/pages/Files';

function IndexRouter() {
    return (
        <>
            <Routes>
                <Route path = "/dashboard/index" element={ <NewsFeedIndex />} />
                <Route path = "/dashboard/profile" element={<UserProfile />} />
                <Route path = "/dashboard/friend-list" element={<FriendList />} />
                <Route path = "/dashboard/people-profile" element={<PeopleProfile />} />
                <Route path='/dashboard/groups' element={ <Groups />} />
                <Route path='/dashboard/profile-images' element={< ProfileImages />} />
                <Route path='/dashboard/videos' element={< Videos /> } />
                <Route path='/dashboard/events' element={ <Events /> } />
                <Route path='/dashboard/notifications' element={ <Notification />} />
                <Route path='/dashboard/files' element={ <Files />} />
                
                <Route path = "/" element={ <NewsFeedIndex />} />

            </Routes>
        </>
    )
}

export default IndexRouter
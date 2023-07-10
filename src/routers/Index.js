import React from 'react';
import {Routes, Route} from 'react-router-dom';
import DefaultStructure from '../components/dashboard/Default';

import Errors from './Errors';
import Auth from './Auth';
import Others from './Others';

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
import TutorRequest from '../views/dashboard/pages/TutorRequest';
import Chats from '../views/dashboard/pages/Chats';
import Todos from '../views/dashboard/pages/Todos';
import Birthdays from '../views/dashboard/pages/Birthdays';
import Calendars from '../views/dashboard/pages/Calendars';
import EmailCompose from '../views/dashboard/pages/EmailCompose';
import PageFAQ from '../views/dashboard/pages/PageFAQ';


function IndexRouter() {
    return (
        <>
            <Errors />
            <Others />
            <Auth />
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
                <Route path='/dashboard/tutor-request' element={ <TutorRequest /> } />
                <Route path='/dashboard/chats' element={ <Chats /> } />
                <Route path='/dashboard/todos' element={ <Todos /> } />
                <Route path='/dashboard/birthdays' element={ <Birthdays /> } />
                <Route path='/dashboard/calendar' element={ <Calendars /> } />
                <Route path='/dashboard/emails' element={ <EmailCompose /> } />
                <Route path='/dashboard/faq' element={ <PageFAQ /> } />
                
                <Route path = "/" element={ <NewsFeedIndex />} />

            </Routes>

        </>
    );
}
export default IndexRouter;
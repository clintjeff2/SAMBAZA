import React from 'react';
import {Routes, Route} from 'react-router-dom';
import NewsFeedIndex from '../views/dashboard/index';
import DefaultStructure from '../components/dashboard/Default';

function IndexRouter() {
    return (
        <>
            <Routes>

                <Route path = "/dashboard/index" element={ <NewsFeedIndex />} />
                <Route path='/default' element={ <DefaultStructure />} />
                <Route path = "/" element={ <NewsFeedIndex />} />

            </Routes>
        </>
    )
}

export default IndexRouter
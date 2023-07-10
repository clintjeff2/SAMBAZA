import React from 'react';
import { Route, Routes,  } from 'react-router';

import Error404 from '../views/dashboard/errors/Error404';
import Error500 from '../views/dashboard/errors/Error500';


function Errors() {
    return (
        <>
            <Routes>
                <Route path='/dashboard/error/page-not-found' element={ <Error404 />} />
                <Route path='/dashboard/error/page-error' element={ <Error500 /> } />
            </Routes>
        </>
    );
}

export default Errors;
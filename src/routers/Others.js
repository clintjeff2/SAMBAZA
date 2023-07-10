import React from 'react';
import { Route, Routes } from 'react-router-dom';

import CommingSoon from './../views/others/CommingSoon';
import Maintenance from '../views/others/Maintenance';
import FAQ from '../views/others/FAQ';

function Others() {
    return (
        <>
            <Routes>
                <Route path='/dashboard/others/comming-soon' element={<CommingSoon />} />
                <Route path='/dashboard/others/maintenance' element={<Maintenance />} />
                <Route path='/dashboard/others/faq' element={<FAQ />} />
            </Routes>
        </>
    )
}

export default Others;
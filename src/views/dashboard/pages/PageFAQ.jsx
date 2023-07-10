import React from 'react';
import DefaultStructure from '../../../components/dashboard/Default';
import Card from '../../../components/Card';


import FAQ from '../../others/FAQ';
function PageFAQ() {
    return (
        <DefaultStructure>
            <Card class="content-s">
                <div className="page-faq">
                    <FAQ/>
                    <FAQ />
                    <FAQ/>
                    <FAQ />
                    <FAQ/>
                    <FAQ />
                    <FAQ/>
                    <FAQ />
                    <FAQ/>
                    <FAQ />
                </div>
            </Card>
        </DefaultStructure>
    );
}

export default PageFAQ;

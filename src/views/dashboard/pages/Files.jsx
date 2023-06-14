import React from 'react';
import DefaultStructure from '../../../components/dashboard/Default';
import Card from '../../../components/Card';
import CardHeader from '../../../components/CardHeader';
import SearchForm from '../../../components/SearchForm';

//IMPORTING ICONS
import { RiMore2Fill } from 'react-icons/ri';

import './../styles/files.scss';
function Files() {
  return (
    <DefaultStructure>
        <Card class="content-s">
            <div className="files">
                <div>
                    <div className="headers">
                        <CardHeader title='Files'>
                            <RiMore2Fill />
                        </CardHeader>
                        <CardHeader title={<SearchForm />}>
                            <div className="actions flex align">
                                <span>Print</span>
                                <span>Excel</span>
                                <span>PDF</span>
                            </div>
                        </CardHeader>
                    </div>
                    <div>
                        Pefect things
                    </div>
                </div>



            </div>
        </Card>
    </DefaultStructure>
  )
}

export default Files
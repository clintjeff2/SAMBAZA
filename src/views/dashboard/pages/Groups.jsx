import React from 'react';
import Card from '../../../components/Card';

//Importing COMPONENTS
import DefaultStructure from '../../../components/dashboard/Default';
import GroupCard from '../../../components/GroupCard';

import './../styles/groups.scss';
function Groups() {
  return (
    <DefaultStructure>
        <Card class="content-s">
            <div className="groups flex">
                <GroupCard />
                <GroupCard />
                <GroupCard />

                <GroupCard />
                <GroupCard />
                <GroupCard />

                <GroupCard />
                <GroupCard />
                <GroupCard />
            </div>
        </Card>
    </DefaultStructure>
  )
}

export default Groups
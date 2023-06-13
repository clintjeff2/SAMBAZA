import React from 'react';
import Card from '../../../components/Card';

//Importing COMPONENTS
import DefaultStructure from '../../../components/dashboard/Default';
import ProfileHead from '../../../components/ProfileHead';
import CardHeader from '../../../components/CardHeader';

//importing ICONS
import { BsFillPencilFill } from 'react-icons/bs';

function PeopleProfile() {
  return (
    <DefaultStructure>
      <Card class="content-ns">
        <div className="flex-col">
          <div className="profile--head" style={{borderRadius:"0px"}}>
            <ProfileHead />
            <div className="profile-body">
              <CardHeader title=''>
                <BsFillPencilFill className='edit-profile'/>
              </CardHeader>
            </div>
          </div>
        </div>
      </Card>
      <Card class="content-s">
        <div className="flex-col" id='profile-sections'>
          <div>
            <CardHeader title="Suggested for you">

            </CardHeader>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum earum voluptate voluptatem sapiente et asperiores error voluptas odio possimus, temporibus accusantium voluptatum magni dolore molestiae veniam libero facere at! Quaerat?
            </p>
          </div>

          <div>
            <CardHeader title="Experience">
              <BsFillPencilFill className='edit-profile'/>
            </CardHeader>
          </div>

          <div>
            <CardHeader title="Education">
              <BsFillPencilFill className='edit-profile'/>
            </CardHeader>
          </div>

          <div>
            <CardHeader title="Skills">
              <BsFillPencilFill className='edit-profile'/>
            </CardHeader>
          </div>
       
          <div>
            <CardHeader title="Interest">
              <BsFillPencilFill className='edit-profile'/>
            </CardHeader>
          </div>
        </div>
      </Card>
    </DefaultStructure>
  )
}

export default PeopleProfile
import React from 'react';
import Card from '../../../components/Card';

//Importing COMPONENTS
import DefaultStructure from '../../../components/dashboard/Default';
import ProfileHead from '../../../components/ProfileHead';
import CardHeader from '../../../components/CardHeader';
import FriendCard from '../../../components/FriendCard';

//import STYLES
import './../styles/friend-list.scss';
function FriendList() {
  return (
    <DefaultStructure>
        <Card class="content-s">
            <div className='friend-list flex'>
                <FriendCard name="Ebokaneza Kings" passion="@cloudArchitect" content="Lorem ipsum dolor sit amet."/>
                <FriendCard name="Tamndja Broket" passion="@designer" content="Lorem ipsum dolor sit amet."/>
                <FriendCard name="Whiskey Wey" passion="@photographer" content="Lorem ipsum dolor sit amet."/>
                <FriendCard name="Daniel Chloe" passion="@developer" content="Lorem ipsum dolor sit amet."/>

                <FriendCard name="Ebokaneza Kings" passion="@cloudArchitect" content="Lorem ipsum dolor sit amet."/>
                <FriendCard name="Tamndja Broket" passion="@designer" content="Lorem ipsum dolor sit amet."/>
                <FriendCard name="Whiskey Wey" passion="@photographer" content="Lorem ipsum dolor sit amet."/>
                <FriendCard name="Daniel Chloe" passion="@developer" content="Lorem ipsum dolor sit amet."/>
            </div>
            
        </Card>
        
    </DefaultStructure>
  )
}

export default FriendList
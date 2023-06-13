import React from 'react';
import Card from '../../../components/Card';

//Importing COMPONENTS
import DefaultStructure from '../../../components/dashboard/Default';
import PictureCard from '../../../components/PictureCard';
import ImagesCard from '../../../components/ImagesCard';

import './../styles/profile-images.scss';
function ProfileImages() {
  return (
    <DefaultStructure>
        <Card className="content-ns">
            <div className="profile-images">
                <PictureCard class='' height="35rem" />
            </div>
        </Card>
        <Card className="content-s">
            <div className="profile-images flex justify align">
                <ImagesCard />
                <ImagesCard />
                <ImagesCard />

                <ImagesCard />
                <ImagesCard />
                <ImagesCard />

                <ImagesCard />
                <ImagesCard />
                <ImagesCard />

                <ImagesCard />
                <ImagesCard />
                <ImagesCard />

                <ImagesCard />
                <ImagesCard />
                <ImagesCard />
            </div>
        </Card>
    </DefaultStructure>
  )
}

export default ProfileImages;
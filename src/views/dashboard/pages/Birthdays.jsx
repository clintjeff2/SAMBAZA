import React from 'react';
import DefaultStructure from '../../../components/dashboard/Default';
import Card from '../../../components/Card';
import CardHeader from '../../../components/CardHeader';
import BirthdayCard from '../../../components/BirthdayCard';

import './../styles/birthdays.scss';
function Birthdays() {
  return (
    <DefaultStructure>
        <Card class="content-s">
            <div className="birthdays">
                <div className="birthdays-today">
                    <CardHeader title="Today Birthday">

                    </CardHeader>
                    <div className="people flex align gap-2">
                        <BirthdayCard />
                        <BirthdayCard />
                    </div>
    
                </div>
                <div className="birthdays-months">
                    <CardHeader title="January Birthday">

                    </CardHeader>
                    <div className="people flex align gap-2">
                        <BirthdayCard />
                        <BirthdayCard />
                        <BirthdayCard />
                        <BirthdayCard />
                    </div>
                </div>
                <div className="birthdays-months">
                    <CardHeader title="Febuary Birthday">

                    </CardHeader>
                    <div className="people flex align gap-2">
                        <BirthdayCard />
                    </div>
                </div>
                <div className="birthdays-months">
                    <CardHeader title="March Birthday">

                    </CardHeader>
                    <div className="people flex align gap-2">
                        <BirthdayCard />
                        <BirthdayCard />
                        <BirthdayCard />
                    </div>
                </div>
                <div className="birthdays-months">
                    <CardHeader title="April Birthday">

                    </CardHeader>
                    <div className="people flex align gap-2">
                        <BirthdayCard />
                        <BirthdayCard />
                        <BirthdayCard />
                        <BirthdayCard />
                        <BirthdayCard />
                    </div>
                </div>
                <div className="birthdays-months">
                    <CardHeader title="May Birthday">

                    </CardHeader>
                    <div className="people flex align gap-2">
                        <BirthdayCard />
                        <BirthdayCard />
                        <BirthdayCard />
                        <BirthdayCard />
                    </div>
                </div>
            </div>
        </Card>
    </DefaultStructure>
  )
}

export default Birthdays;
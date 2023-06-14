import React from 'react';

import Card from '../../../components/Card';

import DefaultStructure from '../../../components/dashboard/Default';
import EventCard from '../../../components/EventCard';

import './../styles/events.scss';
function Events() {
  return (
    <DefaultStructure>
        <Card class="content-s">
            <div className="events flex justify">
                <EventCard />
                <EventCard />
                <EventCard />

                <EventCard />
                <EventCard />
                <EventCard />

                <EventCard />
                <EventCard />
                <EventCard />
            </div>
        </Card>
    </DefaultStructure>
  )
}

export default Events
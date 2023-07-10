import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Calendar as EventCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import DefaultStructure from '../../../components/dashboard/Default';
import Card from '../../../components/Card';
import CardHeader from '../../../components/CardHeader';

import './../styles/calendars.scss';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

import { FaPlus } from 'react-icons/fa';
import { BsCheck } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
function Calendars() {
    const [value, onChange] = useState(new Date());

    const localizer = momentLocalizer(moment);
    const myEventsList = [
        {
            title: 'Creating the Uncreatable',
            start: new Date('Fri Jun 16 2023 01:05:50 GMT+0100 (West Africa Standard Time)'),
            end: Date.parse('Fri Jun 16 2023 04:05:50 GMT+0100 (West Africa Standard Time)'),
            textColor:'white',
            backgroundColor:'#d592ff',
            borderColor:'#d592ff',
            allDay: false,
            resource: 'We would be using Mathematics and Chemistry'
        },
        {
            title: 'Back-End Design',
            start: new Date('Fri Jun 20 2023 09:05:50 GMT+0100 (West Africa Standard Time)'),
            end: Date.parse('Fri Jun 25 2023 11:30:50 GMT+0100 (West Africa Standard Time)'),
            allDay: false,
            resource: 'Using the MERN stack languages'
        },
        {
            title: 'Selling the Project',
            start: new Date('Fri Jun 16 2023 07:05:50 GMT+0100 (West Africa Standard Time)'),
            end: Date.parse('Fri Jun 16 2023 09:05:50 GMT+0100 (West Africa Standard Time)'),
            allDay: false,
            resource: 'Utilizing major business plans'
        }
    ]
    // const myEventsList = [
    // {
    //     title: '5:30a Repeating Event', 
    //     date: '2021-08-29',
    //     textColor:'white',
    //     backgroundColor:'#d592ff',
    //     borderColor:'#d592ff'
    // },
    // {title: '5:30a Repeating Event', date: '2021-08-31',textColor:'white',backgroundColor:'#ff9b8a',borderColor:'#ff9b8a'},
    // {title: '5:30a Birthday Party', date: '2021-09-02',textColor:'white',backgroundColor:'#49f0d3',borderColor:'#49f0d3'},
    // {title: '5:30a Meeting', date: '2021-09-04',textColor:'white',backgroundColor:'#a09e9e',borderColor:'#a09e9e'},
    // {title: '5:30a Birthday Party', date: '2021-09-05',textColor:'white',backgroundColor:'#49f0d3',borderColor:'#49f0d3'},
    // {title: '5:30a Birthday Party', date: '2021-09-08',textColor:'white',backgroundColor:'#ff9b8a',borderColor:'#ff9b8a'},
    // {title: '5:30a Doctor Meeting', date: '2021-09-10',textColor:'white',backgroundColor:'#f4a965',borderColor:'#f4a965'},
    // {title: '5:30a All Day Event', date: '2021-09-11',textColor:'white',backgroundColor:'#50b5ff',borderColor:'#50b5ff'},
    // {title: '5:30a Repeating Event', date: '2021-09-18',textColor:'white',backgroundColor:'#50b5ff',borderColor:'#50b5ff'},
    // {title: '5:30a Repeating Event', date: '2021-09-20',textColor:'white',backgroundColor:'#49f0d3',borderColor:'#49f0d3'},
    // ]
    console.log(new Date())
    return (
        <DefaultStructure>
            <Card class='content-s'>
                <div className="calendar flex align gap-2">
                    <div className="calendar-details flex-width--sm-md flex-col gap-2">
                        <div className="calendar-chart">
                            <Calendar className='chart' onChange={onChange} value={value}/>
                        </div>
                        <div className="classification">
                            <CardHeader title='Classification'>
                                <span >
                                    < FaPlus className="icon-add" />
                                </span>
                            </CardHeader>
                            <div className="classification-item flex-col justify">
                                <li>
                                    <span className="map btn-red"><BsCheck /></span>
                                    <span className="title">Meetings</span>
                                </li>
                                <li>
                                    <span className="map btn-green"><BsCheck /></span>
                                    <span className="title">Business Travel</span>
                                </li>
                                <li>
                                    <span className="map btn-grey"><BsCheck /></span>
                                    <span className="title">Personal Work</span>
                                </li>
                                <li>
                                    <span className="map btn-primary"><BsCheck /></span>
                                    <span className="title">Team Project</span>
                                </li>
                            </div>
                        </div>

                        <div className="schedule">
                            <CardHeader title={`Today's Schedule`}>
                                <span>
                                    < FaPlus className="icon-add" />
                                </span>
                            </CardHeader>
                            <div className="schedule-item flex-col justify">
                                <li className='flex gap-2 align'>
                                    <span className="map btn-purple"></span>
                                    <div className="list-item flex-col justify">
                                        <span className='title'>Web Programming</span>
                                        <span className='time'>9:00 to 12:00 am</span>
                                    </div>
                                </li>
                                <li className='flex gap-2 align'>
                                    <span className="map btn-green"></span>
                                    <div className="list-item flex-col justify">
                                        <span className='title'>Site Relocation</span>
                                        <span className='time'>1:00 to 2:00 pm</span>
                                    </div>
                                </li>
                                <li className='flex gap-2 align'>
                                    <span className="map btn-primary"></span>
                                    <div className="list-item flex-col justify">
                                        <span className='title'>Project Planning</span>
                                        <span className='time'>3:00 to 5:00 pm</span>
                                    </div>
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className="calendar-main flex-width--sm-xl">
                        <CardHeader title='Book Appointment'>
                            <button className="btn flex gap-1">
                                <span >
                                    < AiOutlinePlus className="icon-add" />
                                </span>
                                <span>
                                    Book Appointment
                                </span>
                            </button>
                        </CardHeader>
                        <div className="calendar-events">
                            <EventCalendar 
                                localizer={localizer}
                                events={myEventsList}
                                startAccessor="start"
                                endAccessor="end"
                                style={{minHeight: "500px"}}
                            />
                        </div>

                    </div>
                </div>
            </Card>
        </DefaultStructure>
    )
}

export default Calendars
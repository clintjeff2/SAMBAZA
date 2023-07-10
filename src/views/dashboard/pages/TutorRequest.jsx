import React from 'react';
import DefaultStructure from '../../../components/dashboard/Default';

import Card from '../../../components/Card';
import CardHeader from '../../../components/CardHeader';
import Reddit from '../../../components/Reddit';

import './../styles/tutor-request.scss';
import { IoGitPullRequestOutline } from 'react-icons/io5';
function TutorRequest() {
  return (
    <DefaultStructure>
        <Card class="content-s">
            <div className="tutor-request">
                <div className="accept-request">
                    <CardHeader title='Tutor Request'>

                    </CardHeader>
                    <CardHeader title={<Reddit name='Lucy Tania' time='4 Hours' className='request-item' />}>
                        <div className="flex align gap-2">
                            <button className="btn">
                                Confirm
                            </button>
                            <button className="btn btn-grey">
                                Delete Request
                            </button>
                        </div>
                    </CardHeader>
                    <CardHeader title={<Reddit name='Risc James' time='4 Days' className='request-item' />}>
                        <div className="flex align gap-2">
                            <button className="btn">
                                Confirm
                            </button>
                            <button className="btn btn-grey">
                                Delete Request
                            </button>
                        </div>
                    </CardHeader>
                    <CardHeader title={<Reddit name='La Bella' time='6 Days' className='request-item' />}>
                        <div className="flex align gap-2">
                            <button className="btn">
                                Confirm
                            </button>
                            <button className="btn btn-grey">
                                Delete Request
                            </button>
                        </div>
                    </CardHeader>                   
                    <CardHeader title={<Reddit name='Yinkah Tamdja' time='6 Days' className='request-item' />}>
                        <div className="flex align gap-2">
                            <button className="btn">
                                Confirm
                            </button>
                            <button className="btn btn-grey">
                                Delete Request
                            </button>
                        </div>
                    </CardHeader>
                    <CardHeader title={<Reddit name='Apoalo Cedrik' time='10 Days' className='request-item' />}>
                        <div className="flex align gap-2">
                            <button className="btn">
                                Confirm
                            </button>
                            <button className="btn btn-grey">
                                Delete Request
                            </button>
                        </div>
                    </CardHeader>
                    <CardHeader title={<Reddit name='Piankie Fedrick' time='14 Days' className='request-item' />}>
                        <div className="flex align gap-2">
                            <button className="btn">
                                Confirm
                            </button>
                            <button className="btn btn-grey">
                                Delete Request
                            </button>
                        </div>
                    </CardHeader> 
                </div>
                <div className="send-request">
                    <CardHeader title='Tutors you may know'>

                    </CardHeader>
                    <CardHeader title={<Reddit name='Lucy Tania' time='4 Hours' className='request-item' />}>
                        <div className="flex align gap-2">
                            <button className="btn">
                                < IoGitPullRequestOutline className='icon' />
                                Send Request
                            </button>
                            <button className="btn btn-grey">
                                Remove
                            </button>
                        </div>
                    </CardHeader>
                    <CardHeader title={<Reddit name='Risc James' time='4 Days' className='request-item' />}>
                        <div className="flex align gap-2">
                            <button className="btn">
                                < IoGitPullRequestOutline className='icon' />
                                Send Request
                            </button>
                            <button className="btn btn-grey">
                                Remove
                            </button>
                        </div>
                    </CardHeader>
                    <CardHeader title={<Reddit name='La Bella' time='6 Days' className='request-item' />}>
                        <div className="flex align gap-2">
                            <button className="btn">
                                < IoGitPullRequestOutline className='icon' />
                                Send Request
                            </button>
                            <button className="btn btn-grey">
                                Remove
                            </button>
                        </div>
                    </CardHeader>                   
                    <CardHeader title={<Reddit name='Yinkah Tamdja' time='6 Days' className='request-item' />}>
                        <div className="flex align gap-2">
                            <button className="btn">
                                < IoGitPullRequestOutline className='icon' />
                                Send Request
                            </button>
                            <button className="btn btn-grey">
                                Remove
                            </button>
                        </div>
                    </CardHeader>
                    <CardHeader title={<Reddit name='Apoalo Cedrik' time='10 Days' className='request-item' />}>
                        <div className="flex align gap-2">
                            <button className="btn">
                                < IoGitPullRequestOutline className='icon' />
                                Send Request
                            </button>
                            <button className="btn btn-grey">
                                Remove
                            </button>
                        </div>
                    </CardHeader>
                    <CardHeader title={<Reddit name='Piankie Fedrick' time='14 Days' className='request-item' />}>
                        <div className="flex align gap-2">
                            <button className="btn">
                                < IoGitPullRequestOutline className='icon' />
                                Send Request
                            </button>
                            <button className="btn btn-grey">
                                Remove
                            </button>
                        </div>
                    </CardHeader>    
                </div>
            </div>
        </Card>
    </DefaultStructure>
  )
}

export default TutorRequest;
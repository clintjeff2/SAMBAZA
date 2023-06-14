import React from 'react';
import Card from '../../../components/Card';


import DefaultStructure from './../../../components/dashboard/Default';
import Reddit from '../../../components/Reddit';
import CardHeader from '../../../components/CardHeader';

import { AiOutlineShareAlt, AiOutlineLike, AiOutlineComment} from 'react-icons/ai';
import { RiMoreFill } from 'react-icons/ri';

import './../styles/notification.scss';
function Notification() {
  return (
    <DefaultStructure>
        <Card class='content-s'>
            <div className="notifications">
                <CardHeader className="notification-item" title={< Reddit name="Maya Didas share Your Pos" time="36 mins" />}>
                    <div className="acts flex align">
                        <span className={`type comment`}>
                            <AiOutlineComment />
                        </span>
                        <span className="actions">
                            < RiMoreFill />
                        </span>
                    </div>
                </CardHeader>
                <CardHeader className="notification-item" title={< Reddit name="Maya Didas share Your Pos" time="36 mins" />}>
                    <div className="acts flex align">
                        <span className={`type share`}>
                            <AiOutlineShareAlt />
                        </span>
                        <span className="actions">
                            < RiMoreFill />
                        </span>
                    </div>
                </CardHeader>
                <CardHeader className="notification-item" title={< Reddit name="Maya Didas share Your Pos" time="36 mins" />}>
                    <div className="acts flex align">
                        <span className={`type like`}>
                            <AiOutlineLike />
                        </span>
                        <span className="actions">
                            < RiMoreFill />
                        </span>
                    </div>
                </CardHeader>
                <CardHeader className="notification-item" title={< Reddit name="Maya Didas share Your Pos" time="36 mins" />}>
                    <div className="acts flex align">
                        <span className={`type share`}>
                            <AiOutlineShareAlt />
                        </span>
                        <span className="actions">
                            < RiMoreFill />
                        </span>
                    </div>
                </CardHeader>
                <CardHeader className="notification-item" title={< Reddit name="Maya Didas share Your Pos" time="36 mins" />}>
                    <div className="acts flex align">
                        <span className={`type like`}>
                            <AiOutlineLike />
                        </span>
                        <span className="actions">
                            < RiMoreFill />
                        </span>
                    </div>
                </CardHeader>
                <CardHeader className="notification-item" title={< Reddit name="Maya Didas share Your Pos" time="36 mins" />}>
                    <div className="acts flex align">
                        <span className={`type comment`}>
                            <AiOutlineComment />
                        </span>
                        <span className="actions">
                            < RiMoreFill />
                        </span>
                    </div>
                </CardHeader>
                <CardHeader className="notification-item" title={< Reddit name="Maya Didas share Your Pos" time="36 mins" />}>
                    <div className="acts flex align">
                        <span className={`type share`}>
                            <AiOutlineShareAlt />
                        </span>
                        <span className="actions">
                            < RiMoreFill />
                        </span>
                    </div>
                </CardHeader>
                <CardHeader className="notification-item" title={< Reddit name="Maya Didas share Your Pos" time="36 mins" />}>
                    <div className="acts flex align">
                        <span className={`type like`}>
                            <AiOutlineLike />
                        </span>
                        <span className="actions">
                            < RiMoreFill />
                        </span>
                    </div>
                </CardHeader>
                
            </div>
        </Card>
    </DefaultStructure>
  )
}

export default Notification
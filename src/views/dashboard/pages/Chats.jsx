import React from 'react';
import DefaultStructure from './../../../components/dashboard/Default';
import Card from '../../../components/Card';
import SearchForm from '../../../components/SearchForm';
import GenReddit from '../../../components/GenReddit';


import './../styles/chats.scss';
import CardHeader from '../../../components/CardHeader';
import { RiDeleteBinFill, RiMoreFill } from 'react-icons/ri';
import { IoCallOutline, IoVideocamOutline } from 'react-icons/io5';
import MessageCard from '../../../components/MessageCard';
import ChatForm from '../../../components/ChatForm';
import { AiOutlineComment } from 'react-icons/ai';
function Chats() {
    return (
        <DefaultStructure>
            <Card class='content-s'>
                <div className="chats flex align justify">
                    <div className="chats-contacts flex-width--sm-md">
                        < SearchForm />
                        <div className="contact flex-col justify">
                            <GenReddit />
                            <GenReddit />
                            <GenReddit />

                            <GenReddit />
                            <GenReddit />
                            <GenReddit />

                            <GenReddit />
                            <GenReddit />
                            <GenReddit />

                            <GenReddit />
                            <GenReddit />
                            <GenReddit />
                        </div>
                    </div>
                    <div className="chats-contact-info flex-width--sm-xl flex-col">
                        <CardHeader title={ <GenReddit message='online/last seen 7:55am/'/>}>
                            <div className="flex align actions gap-1">
                                <span className="call-audio">
                                    <IoCallOutline />
                                </span>
                                <span className="call-video">
                                    <IoVideocamOutline />
                                    
                                </span>
                                <span className="delete">
                                    <RiDeleteBinFill />
                                </span>
                                <span className="other">
                                    <RiMoreFill />
                                </span>
                            </div>
                        </CardHeader>
                        <div className="chat-content flex-col" style={{background: "#808080"}}>
                            <MessageCard sender='sender-me'>
                                Lorem ipsum dolor sit amet consectetur.
                            </MessageCard>
                            <MessageCard sender='sender-other'>
                                Lorem ipsum dolor sit.
                            </MessageCard>
                            <MessageCard sender='sender-other'>
                                Lorem ipsum dolor sit amet.
                            </MessageCard>
                            <MessageCard sender='sender-other'>
                                Lorem, ipsum.
                            </MessageCard>
                            <MessageCard sender='sender-me'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, reprehenderit!
                            </MessageCard>
                            <MessageCard sender='sender-other'>
                                Lorem ipsum dolor sit amet.
                            </MessageCard>
                            <MessageCard sender='sender-other'>
                                Lorem, ipsum.
                            </MessageCard>
                            <MessageCard sender='sender-me'>
                                Lorem ipsum dolor, consectetur adipisicing elit. In, reprehenderit!
                            </MessageCard>
                            <MessageCard sender='sender-other'>
                                Dolor
                            </MessageCard>
                            <MessageCard sender='sender-me'>
                                Lorem ipsum dolor.
                            </MessageCard>
                            <MessageCard sender='sender-me'>
                                Consectetur.
                            </MessageCard>
                            <MessageCard sender='sender-other'>
                                Lorem, ipsum.
                            </MessageCard>
                            <MessageCard sender='sender-me'>
                                Lorem ipsum dolor, consectetur adipisicing elit. In, reprehenderit!
                            </MessageCard>
                        </div>
                        <div className="chat-form">
                            <ChatForm />
                        </div>
                    </div>
                    <div className="chats-contact-empty flex-width--sm-xl">
                        <div className="content">
                            <div className="message-icon flex align justify">
                                <AiOutlineComment className="message-icon--comment" />
                            </div>
                            <div className="text">
                                Select contact to Chat
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </DefaultStructure>
    )
}

export default Chats
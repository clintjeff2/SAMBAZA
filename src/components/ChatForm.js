import React from 'react';
import { useRef } from 'react';
import { BsSend } from 'react-icons/bs'

import './component-styles/chat-form.scss';
import { RiAttachment2 } from 'react-icons/ri';
function ChatForm() {
    const fileToUpload = useRef();
    const callFileUpload = () =>{
        fileToUpload.current.click();
    }
    return (
        <div className="chat-form">
            <form action="" className='flex align gap-2'>
                <RiAttachment2 className='upload-file' onClick={callFileUpload}/>
                <input type="file" name="" id="upload-file" ref={fileToUpload} />
                <input type="text" name="" id="send-text" />
                <button className="btn">
                    <BsSend className='icon'/>
                    Send
                </button>
            </form>
        </div>
    )
}

export default ChatForm;

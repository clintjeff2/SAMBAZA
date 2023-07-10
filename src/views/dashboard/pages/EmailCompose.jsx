import React, { useRef } from 'react';
import DefaultStructure from '../../../components/dashboard/Default';

import Card from '../../../components/Card';
import CardHeader from '../../../components/CardHeader';
import { RiAttachment2 } from 'react-icons/ri';


import './../styles/email-compose.scss';
function EmailCompose() {
    const callFileUpload = useRef();
    const fileUploader = ()=>{
        callFileUpload.current.click();
    }
    return (
        <DefaultStructure>
            <Card class='content-s'>
                <div className="email-compose">
                    <div>
                        <CardHeader title = 'Compose Email'>

                        </CardHeader>
                        <form action="" className='email-form'>
                            <div className="flex align to">
                                <span>To:</span>
                                <input type="text" />
                            </div>
                            <div className="flex align cc">
                                <span>Cc:</span>
                                <input type="text" />
                            </div>
                            <div className="flex align subject">
                                <span>Subject:</span>
                                <input type="text" />
                            </div>
                            <div className="flex align message">
                                <span>Message:</span>
                                <textarea name="" id="" cols="30" rows="12"></textarea>
                            </div>
                            <div className="flex align to gap-2">
                                <button className="btn btn-primary">
                                    Send
                                </button>
                                <input type="file" ref={callFileUpload} />
                                <button className="btn btn-primary-light" onClick={fileUploader}>
                                    <RiAttachment2 />
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </Card>
        </DefaultStructure>
    )
}

export default EmailCompose
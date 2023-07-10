import React from 'react';
import DefaultStructure from '../../../components/dashboard/Default';
import Card from '../../../components/Card';
import CardHeader from './../../../components/CardHeader';
import { AiOutlinePlus } from 'react-icons/ai';
import { SiTask } from 'react-icons/si';
import GenReddit from '../../../components/GenReddit';

import './../styles/todos.scss';
import SearchForm from '../../../components/SearchForm';


function Todos() {
  return (
    <DefaultStructure>
        <Card class='content-s'>
            <div className="todos">
                <CardHeader title={` Thursday 15th of Jan, 2023`}>
                  <button className="btn btn-green flex align gap-1">
                    <AiOutlinePlus/>
                    <span>Add Task</span>
                  </button>
                </CardHeader>
                <div className="todos-body flex align gap-2">
                  <div className="todos-task  flex-width--lg">
                    <CardHeader title={ <GenReddit />}>
                      <div className='task-right flex gap-2'> 
                        <span className="state btn-green">Ending</span>
                        <input type="checkbox" name="" id="" />
                      </div>
                    </CardHeader>
                    <CardHeader title={ <GenReddit />}>
                      <div className='task-right flex gap-2'> 
                        <span className="state btn-grey">Starting</span>
                        <input type="checkbox" name="" id="" />
                      </div>
                    </CardHeader>
                    <CardHeader title={ <GenReddit />}>
                      <div className='task-right flex gap-2'> 
                        <span className="state btn-red">Urgent</span>
                        <input type="checkbox" name="" id="" />
                      </div>
                    </CardHeader>
                    <CardHeader title={ <GenReddit />}>
                      <div className='task-right flex gap-2'> 
                        <span className="state btn">Progress</span>
                        <input type="checkbox" name="" id="" />
                      </div>
                    </CardHeader>
                    <CardHeader title={ <GenReddit />}>
                      <div className='task-right flex gap-2'> 
                        <span className="state btn-green">Ending</span>
                        <input type="checkbox" name="" id="" />
                      </div>
                    </CardHeader>
                    <CardHeader title={ <GenReddit />}>
                      <div className='task-right flex gap-2'> 
                        <span className="state btn-grey">Starting</span>
                        <input type="checkbox" name="" id="" />
                      </div>
                    </CardHeader>
                    <CardHeader title={ <GenReddit />}>
                      <div className='task-right flex gap-2'> 
                        <span className="state btn-red">Urgent</span>
                        <input type="checkbox" name="" id="" />
                      </div>
                    </CardHeader>
                    <CardHeader title={ <GenReddit />}>
                      <div className='task-right flex gap-2'> 
                        <span className="state btn">Progress</span>
                        <input type="checkbox" name="" id="" />
                      </div>
                    </CardHeader>
                    <CardHeader title={ <GenReddit />}>
                      <div className='task-right flex gap-2'> 
                        <span className="state btn">Progress</span>
                        <input type="checkbox" name="" id="" />
                      </div>
                    </CardHeader>
                    <CardHeader title={ <GenReddit />}>
                      <div className='task-right flex gap-2'> 
                        <span className="state btn-green">Ending</span>
                        <input type="checkbox" name="" id="" />
                      </div>
                    </CardHeader>
                    <CardHeader title={ <GenReddit />}>
                      <div className='task-right flex gap-2'> 
                        <span className="state btn-grey">Starting</span>
                        <input type="checkbox" name="" id="" />
                      </div>
                    </CardHeader>
                    <CardHeader title={ <GenReddit />}>
                      <div className='task-right flex gap-2'> 
                        <span className="state btn-red">Urgent</span>
                        <input type="checkbox" name="" id="" />
                      </div>
                    </CardHeader>
                  </div>
                  <div className="todos-actions flex-width--md">
                    <SearchForm />
                    <div className="actions-body">
                      <button className="btn flex align gap-1">
                        <AiOutlinePlus/>
                        <span>Add Project</span>
                      </button>
                      <ul>
                        <li>
                          <div className='list-item flex align gap-2'>
                            <SiTask />
                            <span className="title">Mobile App Dep</span>
                          </div>
                        </li>
                        <li>
                          <div className='list-item flex align gap-2'>
                            <SiTask />
                            <span className="title">Phase 2 debugging</span>
                          </div>
                        </li>
                        <li>
                          <div className='list-item flex align gap-2'>
                            <SiTask />
                            <span className="title">New Portfolio site</span>
                          </div>
                        </li>
                        <li>
                          <div className='list-item flex align gap-2'>
                            <SiTask />
                            <span className="title">Secrete Project</span>
                          </div>
                        </li>
                        <li>
                          <div className='list-item flex align gap-2'>
                            <SiTask />
                            <span className="title">flutterwave app</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>

            </div>
        </Card>
    </DefaultStructure>
  )
}

export default Todos
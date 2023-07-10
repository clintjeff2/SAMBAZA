import React from 'react';
import DefaultStructure from '../../../components/dashboard/Default';
import Card from '../../../components/Card';
import CardHeader from '../../../components/CardHeader';
import SearchForm from '../../../components/SearchForm';

//IMPORTING ICONS
import { RiMore2Fill } from 'react-icons/ri';

import './../styles/files.scss';
import PictureCard from '../../../components/PictureCard';
import { BsDownload } from 'react-icons/bs';
import { RiDeleteBinFill } from 'react-icons/ri';

function Files() {
  return (
    <DefaultStructure>
        <Card class="content-s">
            <div className="files">
                <div>
                    <div className="headers">
                        <CardHeader title='Files'>
                            <RiMore2Fill />
                        </CardHeader>
                        <CardHeader title={<SearchForm />}>
                            <div className="actions flex align">
                                <span>Print</span>
                                <span>Excel</span>
                                <span>PDF</span>
                            </div>
                        </CardHeader>
                    </div>
                    <div className='table'>
                        <table>
                            <tr>
                                <th><input type="checkbox" name="" id="" /></th>
                                <th>File Name</th>
                                <th>File Type</th>
                                <th>Date</th>
                                <th>Size</th>
                                <th>Author</th>
                                <th>Action</th>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="" id="" /></td>
                                <td>
                                    <div className="flex align justify">
                                        <PictureCard height='4rem' class=''/>
                                        <span className="desc">total comments</span>
                                    </div>
                                </td>
                                <td>Document</td>
                                <td>March 30, 2023</td>
                                <td>1020 kb</td>
                                <td>Anna Sthesia</td>
                                <td>
                                    <div className="flex align justify">
                                        < BsDownload className='icon'/>
                                        < RiDeleteBinFill className='icon' />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="" id="" /></td>
                                <td>
                                    <div className="flex align justify">
                                        <PictureCard height='4rem' class=''/>
                                        <span className="desc">total comments</span>
                                    </div>
                                </td>
                                <td>Document</td>
                                <td>March 30, 2023</td>
                                <td>1020 kb</td>
                                <td>Anna Sthesia</td>
                                <td>
                                    <div className="flex align justify">
                                        < BsDownload className='icon'/>
                                        < RiDeleteBinFill className='icon' />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="" id="" /></td>
                                <td>
                                    <div className="flex align justify">
                                        <PictureCard height='4rem' class=''/>
                                        <span className="desc">total comments</span>
                                    </div>
                                </td>
                                <td>Document</td>
                                <td>March 30, 2023</td>
                                <td>1020 kb</td>
                                <td>Anna Sthesia</td>
                                <td>
                                    <div className="flex align justify">
                                        < BsDownload className='icon' />
                                        < RiDeleteBinFill className='icon' />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="" id="" /></td>
                                <td>
                                    <div className="flex align justify">
                                        <PictureCard height='4rem' class=''/>
                                        <span className="desc">total comments</span>
                                    </div>
                                </td>
                                <td>Document</td>
                                <td>March 30, 2023</td>
                                <td>1020 kb</td>
                                <td>Anna Sthesia</td>
                                <td>
                                    <div className="flex align justify">
                                        < BsDownload className='icon' />
                                        < RiDeleteBinFill className='icon' />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="" id="" /></td>
                                <td>
                                    <div className="flex align justify">
                                        <PictureCard height='4rem' class=''/>
                                        <span className="desc">total comments</span>
                                    </div>
                                </td>
                                <td>Document</td>
                                <td>March 30, 2023</td>
                                <td>1020 kb</td>
                                <td>Anna Sthesia</td>
                                <td>
                                    <div className="flex align justify">
                                        < BsDownload className='icon'/>
                                        < RiDeleteBinFill className='icon' />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="" id="" /></td>
                                <td>
                                    <div className="flex align justify">
                                        <PictureCard height='4rem' class=''/>
                                        <span className="desc">total comments</span>
                                    </div>
                                </td>
                                <td>Document</td>
                                <td>March 30, 2023</td>
                                <td>1020 kb</td>
                                <td>Anna Sthesia</td>
                                <td>
                                    <div className="flex align justify">
                                        < BsDownload className='icon'/>
                                        < RiDeleteBinFill className='icon' />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="" id="" /></td>
                                <td>
                                    <div className="flex align justify">
                                        <PictureCard height='4rem' class=''/>
                                        <span className="desc">total comments</span>
                                    </div>
                                </td>
                                <td>Document</td>
                                <td>March 30, 2023</td>
                                <td>1020 kb</td>
                                <td>Anna Sthesia</td>
                                <td>
                                    <div className="flex align justify">
                                        < BsDownload className='icon' />
                                        < RiDeleteBinFill className='icon' />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="" id="" /></td>
                                <td>
                                    <div className="flex align justify">
                                        <PictureCard height='4rem' class=''/>
                                        <span className="desc">total comments</span>
                                    </div>
                                </td>
                                <td>Document</td>
                                <td>March 30, 2023</td>
                                <td>1020 kb</td>
                                <td>Anna Sthesia</td>
                                <td>
                                    <div className="flex align justify">
                                        < BsDownload className='icon' />
                                        < RiDeleteBinFill className='icon' />
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>



            </div>
        </Card>
    </DefaultStructure>
  )
}

export default Files
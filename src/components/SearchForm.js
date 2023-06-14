import React from 'react';

//importing ICONS
import { AiOutlineSearch } from 'react-icons/ai';

import './component-styles/search-form.scss';
function SearchForm() {
  return (
    <div className="search-form">
        <form action="" className='form'>
            <input type="text" placeholder='Search'/>
            <button>
                < AiOutlineSearch />
            </button>
        </form>
    </div>
  )
}

export default SearchForm;
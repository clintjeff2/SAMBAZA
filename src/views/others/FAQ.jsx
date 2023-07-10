import React from 'react';
import { SlArrowDown} from 'react-icons/sl';

import {useState} from 'react';


import './scss/faq.scss';
function FAQ({ checkAccordions }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleAccordion = () =>{
    setIsOpen(!isOpen);
  }
  return (
    <div className="faq flex-col gap-2 justify">
      <div className={`accordion ${isOpen? 'display': ''}`}>
        <header className="header flex align">
          <span className="question">
            How do I get a mentor ?
          </span>
          <button className={`arrow ${isOpen? 'open': '' }`}  onClick={handleAccordion}>
            <SlArrowDown />
          </button>
        </header>
        <div className="accordion-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum totam veritatis, corrupti ratione deserunt sunt sint, maiores non ad molestias provident pariatur. Dolor architecto magnam sunt nisi deserunt nemo porro.
        </div>
      </div>
    </div>
  )
}

export default FAQ;
import React from 'react'

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './Value.css'

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="value.png" />
          </div>
        </div>

        {/* right side  */}

        <div className="flexColStart v-right">
          <spam className="orangeText">Our Value</spam>
          <spam className="primaryText">Value We Give to You</spam>
          <spam className="secondaryText">We always ready to help by providing the best services for you.
            <br />
            We believe a good place to live can make your life better
          </spam>
        </div>
      </div>
    </section>
  )
}

export default Value
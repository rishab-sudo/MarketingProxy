import React from 'react'
import Accordion from './Accordion'
import FAQimg from "../../assests/FAQimg.png"

const FAQ = () => {
  return (
    <div id="FAQ" className='FAQ_container'>

      <p className="FAQ_heading" style={{ textAlign: "" }}>Frequently Asked Question</p>
      <div className="FAQimg" style={{ backgroundImage: `url(${FAQimg})` }}>

        <Accordion />
      </div>
    </div>

  )
}

export default FAQ

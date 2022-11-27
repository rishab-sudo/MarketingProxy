import React from 'react'
import facebook from "../../assests/facebook.png"
import {  faSquareFacebook, faSquareInstagram, faSquareWhatsapp, faLinkedin, } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icons = () => {
    return (

<div className='social_container'>

 <a href="https://www.facebook.com/profile.php?id=100084463219381&mibextid=LQQJ4d" className="facebook social">
    <FontAwesomeIcon icon={faSquareFacebook} size="3x" />
 </a>

 <a href="https://wa.me/message/YVV3N7ZVZMAJH1"
   className="whatsapp social">
   <FontAwesomeIcon icon={faSquareWhatsapp} size="3x" />
 </a>

  <a href="https://instagram.com/timely_proxy?igshid=MWI4MTIyMDE="
     className="instagram social">
     <FontAwesomeIcon icon={faSquareInstagram} size="3x" />
  </a>


 <a href="https://www.linkedin.com/company/timelyproxy/"
    className="linkedin social">
    <FontAwesomeIcon icon={faLinkedin} size="3x" />
  </a>

         
</div>
    )
}

export default Icons

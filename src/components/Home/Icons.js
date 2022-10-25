import React from 'react'
import facebook from "../../assests/facebook.png"
import { faYoutube, faFacebook, faTwitter, faInstagram, faWhatsapp, } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icons = () => {
    return (

<div className='social_container'>


 <a href="https://about.facebook.com/"
   className="facebook-social">
   <img  className="facebook-social" src={facebook} style={{height:"43px",paddingRight:"1.31rem"}}/>
 </a>

  <a href="https://www.instagram.com/?hl=en"
     className="instagram social">
     <FontAwesomeIcon icon={faInstagram} size="3x" />
  </a>

 <a href="https://twitter.com/i/flow/login" className="twitter social">
    <FontAwesomeIcon icon={faTwitter} size="3x" />
 </a>

 <a href="https://www.youtube.com"
    className="youtube social">
    <FontAwesomeIcon icon={faYoutube} size="3x" />
  </a>

         
</div>
    )
}

export default Icons

import React from 'react'
import footerImg from "../../assests/footerImg.png"
import { faYoutube, faSquareFacebook, faLinkedin, faSquareInstagram, faSquareWhatsapp, } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className='footer_wrapper' >
      <div style={{ backgroundImage: `url(${footerImg})`, }} className="footer_img">
        <div style={{ background: "rgba(0, 0, 0, 0.6)", height: "100vh", width: "100vw" }}>
          <p className='footer_heading'> Awesome Features</p>
          <p className='footer_subheading'>Interested in learning more about the premium features and benefits 
          of our product? Schedule an appointment today.
          </p>
        </div>
        {/* footer-content */}
        <div className='footer_content'>
          <ul className='link_wrapper'>

            <a href='#Home' className='text-white' id="quicklinks">
              Home
            </a>

            <a href='#About' className='text-white' id="quicklinks">
              About
            </a>

            <a href='#Contact' className='text-white' id="quicklinks">
              Contact
            </a>

            <a href='#FAQ' className='text-white' id="quicklinks">
              FAQ
            </a>


          </ul>
          <div className='icons_container'>
            <p className='' style={{ float: 'left', marginRight: "30px", color: "#FFFFFF", fontSize: "14px", fontFamily: "Inter", paddingTop: "7px" }}>Copyright 2022 @ All rights reserved.</p>
            <a href="https://www.facebook.com/profile.php?id=100084463219381&mibextid=LQQJ4d"
              className="footer_facebook">
              <FontAwesomeIcon icon={faSquareFacebook} size="" />
            </a>
            
            <a href="https://wa.me/message/YVV3N7ZVZMAJH1"
            className="footer_whatsapp">
             <FontAwesomeIcon icon={faSquareWhatsapp} size="" />
                </a>

            <a href="https://instagram.com/timely_proxy?igshid=MWI4MTIyMDE="
              className="footer_instagram">
              <FontAwesomeIcon icon={faSquareInstagram} size="" />
            </a>

            <a href="https://www.linkedin.com/company/timelyproxy/" className="footer_linkedin">
              <FontAwesomeIcon icon={faLinkedin} size="" />
            </a>
          </div>
          <div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
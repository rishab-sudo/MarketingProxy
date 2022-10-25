import React from 'react'
import footerImg from "../../assests/footerImg.png"
import { faYoutube, faFacebook, faTwitter, faInstagram, faWhatsapp, } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className='footer_wrapper' >
      <div style={{ backgroundImage: `url(${footerImg})`, }} className="footer_img">
        <div style={{ background: "rgba(0, 0, 0, 0.6)", height: "100vh", width: "100vw" }}>
          <p className='footer_heading'> Awesome Features</p>
          <p className='footer_subheading'>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Cursus nec ut sed neque duis rhoncus,
            et, scelerisque urna. Arcu velit quam
            facilisi habitant interdum velit purus ac.
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
            <a href="https://about.facebook.com/"
              className="facebook">
              <FontAwesomeIcon icon={faFacebook} size="" />
            </a>

            <a href="https://www.instagram.com/?hl=en"
              className="iinstagram">
              <FontAwesomeIcon icon={faInstagram} size="" />
            </a>

            <a href="https://twitter.com/i/flow/login" className="twitterr">
              <FontAwesomeIcon icon={faTwitter} size="" />
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
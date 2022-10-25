import React, { useState } from 'react'
import { db } from "../../firebaseConfig"
import { addDoc, collection } from "firebase/firestore"
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";


const Contact = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();

  const userCollectionRef = collection(db, "contactdata")
  const handleSubmit = () => {
    addDoc(userCollectionRef, {
      email: email,
      password: password,
      message: message
    }).then(() => {
      if (!alert("Form Submitted Successfully !!!")) document.location = ""
    }).catch((error) => {
      alert(error.message)
    })
  }






  return (
    <div id="Contact" className='contactus_container'>
      <p className='contactus_heading'>Contact Us</p>
      <div className='underline'></div>
      <p className='contactus_subheading'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At pharetra, molestie elit nunc vivamus quam.
      </p>

      <div class="container">
        <div class="row justify-content-center" style={{ marginLeft: "auto" }}>
          <div class="col" >
            <div className='contact_form'>
              <label className='input_lables'>Email</label >
              <input className="input_fields" type="email" placeholder='Email' onChange={(event) => {
                setEmail(event.target.value)
              }} />

              <label className='input_lables'>Password</label >
              <input className="input_fields" type="password" placeholder='Password' onChange={(event) => {
                setPassword(event.target.value)
              }} />
              <label className='input_lables' >Message</label >
              <textarea style={{ height: "100px", lineHeight: "22px", }} className="input_fields" type="text" placeholder='Message' onChange={(event) => {
                setMessage(event.target.value)
              }}></textarea>

            </div>
            <button onClick={handleSubmit} className="submit_btn">Submit</button>
          </div>

          <div class="col">
            <div class="card" id="contact_card" style={{ width: "350px", height: "320px" }}>
              <div className="card-body">
                <h5 className="card-title" id="contact_card_title">Contact Info</h5>
                <div id="underline"></div>
                <div id="contact_card_text">
                  <a href="mailto:" style={{ color: "white" }}>
                    <p id="card-text"> <FaEnvelope id="mailicon" />admin@gmail.com</p>
                  </a>
                  <a href="tel:+6494461709" style={{ color: "white" }}>
                    <p id="card-text"><FaPhoneAlt id="phonicon" style={{ color: "white" }} />9876543210</p>
                  </a>
                  <p id="card-text"><FaClock id="clockicon" />09:00am-15:00pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      {/*contact-right-side-form  */}


    </div>



  )
}

export default Contact;

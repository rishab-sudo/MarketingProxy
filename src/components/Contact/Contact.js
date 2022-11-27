import React, { useState } from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
// import { db } from "../../firebaseConfig"
// import { addDoc, collection } from "firebase/firestore"


const Contact = () => {
  
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // const [message, setMessage] = useState();

  // const userCollectionRef = collection(db, "contactdata")
  // const handleSubmit = () => {
  //   addDoc(userCollectionRef, {
  //     email: email,
  //     password: password,
  //     message: message
  //   }).then(() => {
  //     if (!alert("Form Submitted Successfully !!!")) document.location = ""
  //   }).catch((error) => {
  //     alert(error.message)
  //   })
  // }


  const [details, setDetails] = useState({
    fName: '',
    lName: '',
    email: '',
   
})

const PostData =async(e)=>{
    e.preventDefault()

    const{fName,lName,email}=details;

   const res=await fetch("https://proxyycontact-db-f4803-default-rtdb.firebaseio.com/contactform.json",
   {
       method:'POST',
       headers:{
           'Content-Type':'application/json'
       },
       body:JSON.stringify({
        fName,
        lName,
        email,
       
       })
    })

}




  return (
    <div id="Contact" className='contactus_container'>
      <p className='contactus_heading'>Get a free Demo</p>
      <div className='underline'></div>
      <p className='contactus_subheading'>
      Proxyy would like to give you the opportunity to learn more about how it can take efficiency and profitability to totally new levels in your organisation.

      </p>

      <div class="container">
        <div class="row justify-content-center" style={{ marginLeft: "auto" }}>
          <div class="col" >
            <div className='contact_form'>
              
              <label className='input_lables'>Name</label >
              <input className="input_fields" type="text" placeholder='Name' onChange={(e)=>
            setDetails({...details,fName:e.target.value})} />

              <label className='input_lables'>Email</label >
              <input className="input_fields" type="password" placeholder='Email' onChange={(e)=>
            setDetails({...details,lName:e.target.value})}  />
              
              <label className='input_lables' >Mob.No</label >
              <input  className="input_fields" type="text" placeholder='Mob.No' onChange={(e)=>
            setDetails({...details,email:e.target.value})} />

             <label className='input_lables' >College Name</label >
              <input  className="input_fields" type="text" placeholder='College Name' onChange={(e)=>
            setDetails({...details,email:e.target.value})} />
            

            </div>
            <button onClick={PostData} className="submit_btn">Submit</button>
          </div>

          <div class="col">
            <div class="card" id="contact_card" style={{ width: "350px", height: "320px" }}>
              <div className="card-body">
                <h5 className="card-title" id="contact_card_title">Contact Info</h5>
                <div id="underline"></div>
                <div id="contact_card_text">
                  <a href="mailto:" style={{ color: "white" }}>
                    <p id="card-text"> <FaEnvelope id="mailicon" /> proxy.pvt01@gmail.com </p>
                  </a>
                  <a href="tel:+6494461709" style={{ color: "white" }}>
                    <p id="card-text"><FaPhoneAlt id="phonicon" style={{ color: "white" }} />+91-8171330405</p>
                  </a>
                  <p id="card-text"><FaClock id="clockicon" />24x7</p>
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

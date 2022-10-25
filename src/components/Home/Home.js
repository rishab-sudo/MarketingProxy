import React from 'react'
import vector1 from "../../assests/vector1.png"
import vector3 from "../../assests/vector3.png"
import vector4 from "../../assests/vector4.png"
import apple from "../../assests/apple.png"
import playStore from "../../assests/playStore.png"
import HomeBgImg from "../../assests/HomeBgImg.png"
import HomeBgImg2 from "../../assests/HomeBgImg2.png"
import MobileImg2 from "../../assests/MobileImg2.png"
import zeroOne from "../../assests/zeroOne.png"
import zeroTwo from "../../assests/zeroTwo.png"
import zeroThree from "../../assests/zeroThree.png"
import HomeMobile from "../../assests/HomeMobile.png"
import Icons from "./Icons"
import "../../App.css"
// import Login from "../Login/Login"
// import About from "../About/About"
// import Contact from "../Contact/Contact"
// import FAQ from "../FAQ/FAQ"


const Home = () => {
  return (
    <>

      <div className='home-main-container' id="Home">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="d-flex flex-column bd-highlight mb-3">
                <div class="p-2 bd-highlight">
                  <p className='home-heading'>
                    Get Your Attendance <br></br>
                    Marked With Just<br></br>
                    Three Simple Steps
                  </p>
                </div>

                <div class="p-2 bd-highlight"><p className='home-sub-heading'>
                  No need to wait for you roll call.<br></br>
                  Download now to get your Attendance<br></br>
                  update in just few steps.
                </p>
                </div>

                <div class="p-2 bd-highlight"> <div className="home-btn-div">
                  <button className='home_btn1'>
                    <p style={{ fontSize: ".7rem", marginLeft: "25px" }}>Download on the</p>
                    <p style={{ fontSize: "1.2rem", marginTop: "-20px", marginLeft: "25px" }}>App Store</p>
                    <img className="btn_icon1" src={apple} alt=""></img>
                  </button>
                  <button className='home_btn2'>
                    <p style={{ fontSize: ".7rem", marginLeft: "25px" }}>Download on the</p>
                    <p style={{ fontSize: "1.2rem", marginTop: "-20px", marginLeft: "25px" }}>Play Store</p>
                    <img className="btn_icon1" src={playStore} alt=""></img>
                  </button>
                </div>
                </div>
              </div>
            </div>

            <div class="col" style={{ display: "flex", marginRight: "-122px" }}>
              <img className='vector1_img' src={vector1} alt=""></img>
              <img className='vector3_img' src={vector3} alt=""></img>
              <img className='vector4_img' src={vector4} alt=""></img>

            </div>
          </div>
        </div>
      </div>
      {/* Home-Page-Part-2 */}
      <div className="sub_container_Img" style={{ backgroundImage: `url(${HomeBgImg})`, textAlign: "center" }}>
        <div className="container" style={{ background: "rgba(0, 0, 0, 0.6)", height: "87vh", minWidth: "100%", marginTop: "0vh", paddingTop: "25vh" }}>
          <p className='BgImg_heading'>Let's Get You Started</p>
          <div className='underline' style={{ textAlign: "" }}></div>
          <p className='BgImg_sub_heading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nec ut sed neque duis rhoncus,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nec ut sed neque
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nec ut sed neque duis rhoncus,
          </p>
          <div className='home_icons'>
            <Icons />
          </div>
        </div>
      </div>
      {/* Home-Page-Part-3 */}
      <div className='sub_container_Imgg' style={{ backgroundImage: `url(${HomeBgImg2})`, textAlign: "center" }}>
        <div className="container" style={{ textAlign: "" }}>
          <p className='BgImg2_heading'>How It Works</p>
          <div className='underline2'></div>
          <p className='BgImg2_sub_heading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            At pharetra, molestie elit nunc vivamus quam.

          </p>
        </div>

        <div class="container" style={{}}>
          <div class="row">

            <div class="col">
              <div className='circles'>
                <img src={zeroOne} style={{ textAlign: "center", paddingTop: "50px" }} alt=""></img>
              </div>
              <p className='circle_heading'>Click On OR Scanner</p>
              <p className='circle_sub_heading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                At phareta,molestie elit nunc vivamus quam.
              </p>
            </div>
            <div class="col">
              <img className="mobile2" src={MobileImg2} alt=""></img>
            </div>
          </div>
        </div>
        {/* .... */}
        <div class="container" style={{}}>
          <div class="row">

            <div class="col">
              <img className="mobile2" src={MobileImg2} alt=""></img>
            </div>

            <div class="col">
              <div className='circle2'>
                <img src={zeroTwo} style={{ textAlign: "center", paddingTop: "50px" }} alt=""></img>
              </div>
              <p className='circle_heading'>Scan The Provided QR</p>
              <p className='circle_sub_heading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                At phareta,molestie elit nunc vivamus quam.
              </p>
            </div>
          </div>
        </div>
        {/* ... */}
        <div class="container" style={{}}>
          <div class="row">
            <div class="col">
              <div className='circles'>
                <img src={zeroThree} style={{ textAlign: "center", paddingTop: "50px" }} alt=""></img>
              </div>
              <p className='circle_heading'>Mark Your Attendance</p>
              <p className='circle_sub_heading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                At phareta,molestie elit nunc vivamus quam.
              </p>
            </div>
            <div class="col">
              <img className="mobile2" src={MobileImg2} alt=""></img>
            </div>
          </div>
        </div>


      </div>

    </>
  )
}

export default Home










import React from 'react'
import AboutImg from "../../assests/AboutImg.png"
import Crousel from "./Crousel"
import image4 from "../../assests/image4.png"
import image5 from "../../assests/image5.png"
import image6 from "../../assests/image6.png"
import AppSS from "../../assests/AppSS.png"
import apple from "../../assests/apple.png"
import playStore from "../../assests/playStore.png"

const About = () => {
  return (
    <>
    <div id="About" className="About_container" style={{background:"#022C44"}}>
 
 <div class="row" style={{marginLeft:"auto",marginRight:"auto"}}>
    <div class="col">
    <img className="AboutImg" src={AboutImg} alt=""></img>
    </div>
  
    <div class="col">
    <p className='Aboutus_heading'>About Us</p>
    <div className='Aboutus_underline'></div>
   <p className='Aboutus_subHeading'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
   Cursus nec ut sed neque duis rhoncus, et, scelerisque urna. Arcu velit quam facilisi habitant interdum velit purus ac. 
   Ipsum at venenatis massa tortor, viverra netus sed. Nunc ipsum nunc id gravida urna libero. Elit netus sit risus, lacinia. Placerat donec amet blandit in orci. 
   Tincidunt tincidunt donec consequat erat commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nec ut sed neque duis rhoncus, et, scelerisque urna. 
   Arcu velit quam facilisi habitant interdum velit purus ac. Ipsum at venenatis massa tortor, viverra netus sed. Nunc ipsum nunc id gravida urna libero. Elit netus sit risus, lacinia.
    Placerat donec amet blandit in orci. 
   Tincidunt tincidunt donec consequat erat commodo.
   </p>
    </div>
  </div>
  </div>
{/* testimonial-page */}
   
   <div className='testimonial_main_container'>
    
    <div className='test_heading_para'>
     <p className='testi_heading'>Testimonial</p>
     <div className='underline' style={{marginTop:"60px"}}></div>
     <p className='testi_sub_heading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
At pharetra, molestie elit nunc vivamus quam. </p>
</div>
</div>
{/* Daily-updates */}
<div className="Daily_updates_container">
  <div class="row">
    
    <div class="col">
    <div className='DailyUpdates_heading_para'>
<p className='DailyUpdates_heading'>Daily Updates.<br/>No ads. No delays</p>
<div className='underline' style={{float:"left",marginTop:"-20px",marginBottom:"10px"}}></div>
<p className='DailyUpdates_subheading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At pharetra, molestie elit nunc vivamus quam. </p>
</div>
    </div>
   
    <div class="col" style={{paddingLeft:"100px"}}>
     <img src={image4} style={{width:"508px",height:"329px",marginTop:"2rem"}}></img><br/>
     <img src={image6} style={{width:"247px",height:"276px",marginLeft:"-82px",marginRight:"10px"}}></img>
     <img src={image5} style={{width:"334px",height:"322px",marginTop:"15px",marginLeft:""}}></img>
    </div>
  
  </div>
   </div>
   {/*  */}
  <div className='DownloadApp_container'>
    <div className='heading_para' style={{paddingTop:"1.5rem",paddingBottom:"2.5rem"}}>
<p className='DownloadApp_heading'>Download App</p>
<p className='DownloadApp_sub_heading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nec ut sed neque
 duis rhoncus, et, scelerisque urna. Arcu velit quam facilisi habitant interdum velit purus ac. Ipsum at venenatis
  massatortor, viverra netus sedunc ipsum nunc id gravida urna libero. Elit netus sit risus, lacinia.
</p>
</div>
<div className='btn' style={{display:"flex",justifyContent:"center",paddingBottom:"2rem"}}>
<button className='home_btn1'>
  <p style={{fontSize:".7rem",marginLeft:"25px"}}>Download on the</p>
  <p style={{fontSize:"1.2rem",marginTop:"-20px",marginLeft:"25px"}}>App Store</p>
  <img className="btn_icon1"src={apple} alt=""></img>
</button>
<button className='home_btn2'> 
  <p style={{fontSize:".7rem",marginLeft:"25px"}}>Download on the</p>
  <p style={{fontSize:"1.2rem",marginTop:"-20px",marginLeft:"25px"}}>Play Store</p>
  <img className="btn_icon1"src={playStore} alt=""></img>
</button>
</div>
  </div>
  {/*  */}
  <div className='App_SS_container' style={{width:"100vw",height:"100vh",backgroundImage: `url(${AppSS})`}}>
<p className='SS_heading' style={{paddingTop:'1.5rem'}}>App Screenshots</p>

  </div>
   </>
   
  )
}

export default About




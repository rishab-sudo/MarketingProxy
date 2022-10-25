import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {  Routes, Route,BrowserRouter} from "react-router-dom"
import Navbar from './Navbar/Navbar';
import Home from "../src/components/Home/Home"
import About from "../src/components/About/About"
import Contact from "../src/components/Contact/Contact"
import Login from "../src/components/Login/Login"
import FAQ from "../src/components/FAQ/FAQ"
import Footer from "../src/components/Footer/Footer"
import Slider from "../src/Slider/Slider"


function App() {
  return (
    <>
    <h1>hello</h1>
    <Navbar/>
    <Home/>
    <About/>
    <Contact/>
    <FAQ/>
    {/* <Login/>  */}
    <Footer/>


    {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter> */}
    </>
  );
}

export default App;

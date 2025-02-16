import React from 'react';
import "./css/Blogs.css";
import inno from "../assets/images/inno.jpg";
import kj1 from "../assets/images/kj1.jpg";
import kj2 from "../assets/images/kj2.jpg";
import ag from "../assets/images/ag.jpg";
// import { NavLink } from "react-router-dom";
import "./css/WhatWeDo.css";

const Achievements = () => {
  return (
    <>
    <div className='main-prj'>
       <center>
         <div className='text-prj'> Hackthon Victories </div>
       </center>
       <div className="inner-prj">
        <div className="blog-prj">
          <img src={inno} alt="femate" className="image" />
        </div>
        <div className="prj-content">
          <div className="prj-main-heading">
            <div>Innotech-22 Winner</div>
          </div>
          <div className="prj-2">
          <spam>Rohit and Vartul</spam>, with Rohit being a member of the DSDL Club, showcased their prowess at Innotech-22, winning accolades for their innovative contributions. Their victory underscores the impact of collaboration and the cutting-edge insights fostered within technology-focused clubs, reaffirming their commitment to excellence in the field.
          </div>
        </div>
      </div>
       <div className="inner-prj">
        <div className="blog-prj">
          <img src={kj1} alt="cheque" className="image" />
        </div>
        <div className="prj-content">
          <div className="prj-main-heading">
            <div>TechHacks 3.0</div>
          </div>
          <div className="prj-2">
          Kanisk Jaiswal, a key member of the DSDL Club, achieved the 1st Runner-Up position with cash prize of 10k at Techacks 3.0, Chitkara University held on 5-6 January 2023. Collaborating with the talented team of Piyush Sharma, Khushi Sachdev, and Sampada, they showcased exceptional skills and innovation. Congratulations to the DSDL Club for yet another remarkable triumph in the dynamic world of technology.
          </div>
        </div>
      </div>
       <div className="inner-prj">
        <div className="blog-prj">
          <img src={kj2} alt="openai" className="image" />
        </div>
        <div className="prj-content">
          <div className="prj-main-heading">
            <div>NASA Space Apps</div>
          </div>
          <div className="prj-2">
          Kanisk Jaiswal, a standout member of the DSDL Club, led the team to become the global nominee and secure an impressive 3rd position in the Greater Noida region with cash prize of 5K held on 2nd-3rd October 2022 . Collaborating with the talented team of Shivansh Pandey, Garima Shukla , Manas and their innovative prowess shone brightly.
          </div>
        </div>
      </div>
       <div className="inner-prj">
        <div className="blog-prj">
          <img src={ag} alt="openai" className="image" />
        </div>
        <div className="prj-content">
          <div className="prj-main-heading">
            <div>Ideathon ISABVP</div>
          </div>
          <div className="prj-2">
          <spam>Anuj Gupta, Manisha Maurya</spam> a standout members of the DSDL Club, led the team to secure the 3rd position in the ideathon organized by ISABVP. Alongside the talented team of  Akshat Srivastava and Ira Nafees for their innovative  performance.
          </div>
        </div>
      </div>
      </div>
    <div className="main-blog">
      <center>
        <div className="text-blog"> Publications </div>
      </center>
      <div className="inner-blog">
        <div className="blog-content">
          <div id="blog-main-heading">
            <div>A Novel Model for Stress Detection and Management using Machine Learning</div>
          </div>
          <div className="blog-2">
          Explore a pioneering stress detection and management model by <spam>Aditi Agarwal, Astha Goel, Shristy Sharma, Soniya Jain, Mani Dwivedi, and Deep Kumar</spam>, published in IEEE Xplore, revolutionizing well-being through advanced machine learning techniques.
          </div>
          {/* <div>
            <NavLink to="https://ieeexplore.ieee.org/document/10150768">
              <div className="prj-button">Explore</div>
            </NavLink>
          </div> */}
        </div>
      </div>
      <div className="inner-blog">
        <div className="blog-content">
          <div id="blog-main-heading">
            <div>A comprehensive review on the advancement of high-dimensional neural networks in quaternionic domain with relevant applications.</div>
          </div>
          <div className="blog-2">
          The neurocomputing communities have focused much interest on quaternionic-valued neural networks (QVNNs) due to the natural extension in quaternionic signals, learning of inter and spatial relationships between the features, and remarkable improvement against real-valued neural networks (RVNNs) and complex-valued neural networks (CVNNs). 
          </div>
          {/* <div>
            <NavLink to="https://ieeexplore.ieee.org/document/10150768">
              <div className="prj-button">Explore</div>
            </NavLink>
          </div> */}
        </div>
      </div>
      </div>
    </>
  )
}

export default Achievements
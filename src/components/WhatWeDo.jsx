import React from 'react';
import femate from "../assets/images/f.gif";
import cheque from "../assets/images/cheque.jpeg.jpg";
import openai from "../assets/images/OpenAI.jpg";
import mdps from "../assets/images/mdps.jpg";
import yoga from "../assets/images/yoga.jpg"
import { NavLink } from "react-router-dom";
import "./css/Blogs.css";
import btcp1 from "../assets/images/btcp1.jpg";
import btcp2 from "../assets/images/btcp2.jpg";
import btcp3 from "../assets/images/btcp3.jpg";
import "./css/WhatWeDo.css";

const WhatWeDo = () => {
  return (
    <>
      <div className='main-prj'>
        <center>
          <div className='text-prj'> Projects </div>
        </center>
        <br></br>
        <br></br>
        <br></br>
        <center>
          <div className='text-prj'> Projects Completed </div>
        </center>
        <div className="inner-prj">
          <div className="blog-prj">
            <img src={femate} alt="femate" className="image" />
          </div>
          <div className="prj-content">
            <div className="prj-main-heading">
              <div>Femate</div>
            </div>
            <div className="prj-2">
              Developed for women to track their periods and pamper themselves on our pamper-booth.
              They can shop for menstrual hygiene products and call a loved one whenever they are feeling low.
            </div>
            <p className='prj-2'>Made By - Parth Mishra(Batch of 2024)</p>
            <div>
              <NavLink to="https://github.com/praxton74/Femate">
                <div className="prj-button">Explore</div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="inner-prj">
          <div className="blog-prj">
            <img src={cheque} alt="cheque" className="image" />
          </div>
          <div className="prj-content">
            <div className="prj-main-heading">
              <div>Cheque-Detection</div>
            </div>
            <div className="prj-2">
              Bank handles large volumes of cheques in the clearing process. The process involves many technical verifications including signature verification. Some of these steps are manual and require human intervention to complete the process. The current process requires the high human capital deployment and longer processing time.
            </div>
            <p className='prj-2'>Made By - Anubhav Yadav(Batch of 2024)</p>
            <div>
              <NavLink to="https://github.com/GreatClasher/Cheque-Detection">
                <div className="prj-button">Explore</div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="inner-prj">
          <div className="blog-prj">
            <img src={openai} alt="openai" className="image" />
          </div>
          <div className="prj-content">
            <div className="prj-main-heading">
              <div>GPT-2 Text Classification API</div>
            </div>
            <div className="prj-2">
              This repository contains code to deploy a RESTful API for text classification using the GPT-2 model. The API is built using FastAPI, and it allows users to make predictions on text input.
            </div>
            <p className='prj-2'>Made By - Parth Mishra(Batch of 2024)</p>
            <div>
              <NavLink to="https://github.com/GreatClasher/Gpt2_classification">
                <div className="prj-button">Explore</div>
              </NavLink>
            </div>
          </div>
        </div>
        <center>
          <div className='text-prj'> Ongoing Projects </div>
        </center>
        <div className="inner-prj">
          <div className="blog-prj">
            <img src={yoga} alt="openai" className="image" />
          </div>
          <div className="prj-content">
            <div className="prj-main-heading">
              <div>Yoga Posture Recognition</div>
            </div>
            <div className="prj-2">
              Yoga posture recognition via machine learning involves collecting diverse datasets of yoga poses, preprocessing and labeling the data, selecting a suitable model like Convolutional Neural Networks (CNNs), training and fine-tuning the model, and deploying it for real-time recognition. Continuous monitoring and user feedback inform updates for improved accuracy. The process typically includes developing a user interface for interaction. Successful implementation hinges on a curated dataset, optimal model choice, and effective training. Ongoing refinement ensures the system's reliability in identifying yoga poses from images or videos.
            </div>
            <p className='prj-2'>Made By - Arvind Gautam(Batch of 2025)</p>
            <div>
              <NavLink to="https://github.com/aryanmishra29/G1-BlissFit.git">
                <div className="prj-button">Explore</div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="inner-prj">
          <div className="blog-prj">
            <img src={mdps} alt="openai" className="image" />
          </div>
          <div className="prj-content">
            <div className="prj-main-heading">
              <div>Multiple Disease Prediction System</div>
            </div>
            <div className="prj-2">
              Our Multiple Disease Prediction System is an innovative and user-friendly application designed to predict three prevalent health conditions: diabetes, heart disease, and Parkinson's. Deployed on the Streamlit platform, this system leverages advanced machine learning algorithms to analyze user-inputted data and provide insightful predictions regarding the likelihood of these diseases.
            </div>
            <p className='prj-2'>Made By - Kanisk Jaiswal(Batch of 2025)</p>
            <div>
              <NavLink to="https://t7grl3uld.streamlit.app/">
                <div className="prj-button">Explore</div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="main-blog">
        <center>
          <div className="text-blog"> BootCamps </div>
        </center>
        <div className="inner-blog">
          <div className="blog-image">
            <img src={btcp1} alt="bootcamp" id="image" />
          </div>
          <div className="blog-content">
            <div id="blog-main-heading">
              <div>Machine Learning Bootcamp</div>
            </div>
            <div className="blog-2">
              The Machine Learning Bootcamp held from 19-28th June, centered around the roadmap to mastering machine learning algorithms, was an astounding success! From decoding complex algorithms to practical implementations, participants dove into the world of machine learning, honing their skills over the course of the program.

              We successfully trained a significant number of participants, providing them with a solid foundation in machine learning and empowering them to build robust algorithms. We are thrilled to have played a part in your journey towards becoming skilled machine learning practitioners.

              Stay tuned for more exciting updates and resources as we continue to support your growth in the field of machine learning. Keep pushing the boundaries and exploring new horizons!
            </div>
            <p className='prj-2'>Instructors - Arvind Gautam and Kanisk Jaiswal(Batch of 2025)</p>
            <p className='prj-2'>Attended By - 200+ Students</p>
          </div>
        </div>
        <div className="inner-blog">
          <div className="blog-image">
            <img src={btcp2} alt="bootcamp" id="image" />
          </div>
          <div className="blog-content">
            <div id="blog-main-heading">
              <div>BYTE INTO LINUX Bootcamp</div>
            </div>
            <div className="blog-2">
              DSDL organized a power-packed 5-day journey from Nov 3 to Nov 8, delving into the heart of Linux.
              With the expertise of our incredible instructor, Amandeep singh (Batch of 2025) attended by 60+ Students. Special thanks to our mentor, Mr. Gaurav Ji Srivastava, for guiding student through his immersive experience!
            </div>
          </div>
        </div>
        <div className="inner-blog">
          <div className="blog-image">
            <img src={btcp3} alt="bootcamp" id="image" />
          </div>
          <div className="blog-content">
            <div id="blog-main-heading">
              <div>Django Backend Bootcamp</div>
            </div>
            <div className="blog-2">
              DSDL organized a Django BootCamp focused on mastering Django, a high-level Python web framework. Participants learn to build robust web applications, covering essential concepts like models, views, templates, and forms. The BootCamp also delves into database integration, authentication, and deployment. Practical exercises enhance hands-on skills, preparing attendees for real-world web development challenges.
            </div>
            <p className='prj-2'>Instructor - Risabh Jaiswal(Batch of 2024)</p>
            <p className='prj-2'>Attended By - 50+ Students</p>
          </div>
          <div>
            <p id="blog-main-headings">Many More BootCamps Completed.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhatWeDo
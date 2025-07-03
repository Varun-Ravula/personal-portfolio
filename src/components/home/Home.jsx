// importing modules
import React from 'react'
import './Home.css';
import { Row, Col } from 'react-bootstrap';
import {ReactTyped} from 'react-typed';
import { ToastContainer,toast } from 'react-toastify';

// importing react icons
import { FaRegEye } from "react-icons/fa";
import { RiDownloadFill } from "react-icons/ri";

function Home() {

  // creating function for disabling right click
  const handleToast=()=>{
    toast.error('Right click function is disabled!',{position:"top-right"})
  }
  // creating function for disabling right click
  const handleContext=(e)=>{
    e.preventDefault();
  }

  // react element
  return (
    <div className='home-content container'>
<ToastContainer className="mt-5"/>
      <Row className="align-items-center">
        <Col lg={6}>
        <div data-aos="fade-up" data-aos-delay="300" className='mb-5'>
          {/* intro name */}
          <h4 className="intro">Hi, i'm <span className="introName">varun ravula</span></h4>
          {/* intro role */}
          <p className="introRole"><ReactTyped strings={["Full Stack Developer","Frontend Developer","Backend Developer","MERN Stack Developer"]} typeSpeed={40} backSpeed={50} loop></ReactTyped></p>
          {/* intro para */}
          <p className="introPara" data-aos="fade-up" data-aos-delay="400">Passionate about creating innovative web solutions with modern technologies. I specialize in React, Node.js, and cloud technologies to build scalable applications that make a difference.
          </p>
          <div>
            <a href="#projects"><button className="btn btn-warning view-my-work-btn p-2 me-2 text-capitalize mb-3"><FaRegEye /> view my work</button></a>
            <a href={`${import.meta.env.BASE_URL}varun_resume.pdf`} download><button className='btn btn-danger p-2 download-resume-btn mb-3'><RiDownloadFill/> Download Resume</button></a>
          </div>
        </div>
        </Col>
        <Col lg={6}>
        <div className="align-items-center" data-aos="fade-left" data-aos-delay="300">
        <img src="https://res.cloudinary.com/djkoe1qv4/image/upload/v1751106839/profile_picture_jl3ezf.jpg" alt="varun ravula" className="intro-profile-picture d-block m-auto mt-1" onContextMenu={handleContext} onClick={handleToast}/>
        </div> 
        </Col>
      </Row>
    </div>
  )
}

export default Home;
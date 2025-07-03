// importing modules
import React from 'react'
import './About.css';
import { Row, Col } from 'react-bootstrap';
import { FaCode, FaLaptopCode, FaMobile, FaServer } from 'react-icons/fa';
import { TbWorld } from "react-icons/tb";


// importing image
import software_digital_image from '../../assets/software_digital_pic.jpg';

function About() {

  // services data
  const services = [
    {
      icon: <FaCode />,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces using React and modern CSS frameworks.'
    },
    {
      icon: <FaServer />,
      title: 'Backend Development',
      description: 'Building robust server-side applications with Node.js, Express, and database integration.'
    },
    {
      icon: <TbWorld />,
      title: 'Web App Development',
      description: 'Developing dynamic and user-friendly web applications using MERN stack.'
    },
    {
      icon: <FaLaptopCode />,
      title: 'Full Stack Solutions',
      description: 'End-to-end web application development from concept to deployment.'
    }
  ];

  // react element
  return (
    <div className='bg-light aboutMeSection'>
      <div className='mt-3 container'>
        <h4 className="aboutMeHeading" data-aos="fade-up">About Me</h4>
        <div className="about-content mt-2">
          <Row>
            <Col lg={6}>
              <div data-aos="fade-right" data-aos-delay={100}>
                <img src={software_digital_image} alt="about me" className="aboutMeImage rounded mt-2" width="100%" />
              </div>
            </Col>
            <Col lg={6}>
              <div data-aos="fade-left" className='about-info' data-aos-delay={100}>
                <h4 className='mb-4 display-4 fw-semibold mt-4'>Passionate Developer & Problem Solver</h4>
                <p className='mb-4'>I'm a full-stack developer with over practical experience in creating digital solutions that are not only functional but also user-friendly. My journey in web development started with a curiosity about how things work on the internet, and it has evolved into a passion for creating innovative applications.</p>

                <p className='mb-4'>I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and have extensive experience with cloud platforms like Cloudinary web service. I believe in writing clean, maintainable code and following best practices in software development.</p>
                <div>
                  <Row>
                    <Col sm={6} className='list-unstyled'>
                      <li><strong>Name:</strong> Ravula Varun Sandesh</li>
                      <li><strong>Age:</strong> 23</li>
                      <li><strong>Experience:</strong> Fresher</li>
                    </Col>
                    <Col sm={6} className='list-unstyled'>
                      <li><strong>Location:</strong> Hyderabad,Telangana,India</li>
                      <li><strong>Email:</strong> varunravula66@gmail.com</li>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="aboutRolesSection mt-3">
          <h4 className="text-center mb-3 mt-2" data-aos="fade-up">What I Do</h4>
          <div className='mt-4'>
            <Row>
              {services.map((service, index) => (
                <Col lg={3} md={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className='card text-center p-3 m-1'>
                    <div className='card-img-top mb-2'>{service.icon}</div>
                    <h4 className='card-title'>{service.title}</h4>
                    <p className='card-text'>{service.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
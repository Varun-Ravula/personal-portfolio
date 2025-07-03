import React from 'react'
import './Projects.css';
import { Row, Col, Badge, ButtonGroup, Button, Modal, Carousel } from 'react-bootstrap';
import defaultProjectImage from '../../assets/default-project-image.webp';
import { useState } from 'react';
import { FaRegEye, FaGithub } from "react-icons/fa";
import { ImShare } from "react-icons/im";

// importing images
import project1_1 from '../../assets/project-1.1.png';
import project1_2 from '../../assets/project-1.2.png';
import project1_3 from '../../assets/project-1.3.png';

import project2_1 from '../../assets/project-2.1.png';
import project2_2 from '../../assets/project-2.2.png';
import project2_3 from '../../assets/project-2.3.png';

import project3_1 from '../../assets/project-3.1.png';
import project3_2 from '../../assets/project-3.2.png';
import project3_3 from '../../assets/project-3.3.png';

import project4_1 from '../../assets/project-4.1.png';
import project4_2 from '../../assets/project-4.2.png';
import project4_3 from '../../assets/project-4.3.png';


function Projects() {

  const projects = [
    {
      id: 1,
      title: 'AuthApp – Secure User Authentication with JWT & MongoDB',
      description: 'A full-stack authentication system using JWT, bcrypt, and MongoDB. Users can securely register, login, and access protected routes.',
      image: project1_3,
      technologies: ['React', 'Bootstrap', 'Node.js', 'Express.js', 'MongoDB'],
      githubUrl: 'https://github.com/Varun-Ravula/Auth-App',
      liveUrl: '',
      category: 'Full Stack',
      longDescription: 'A comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment integration with Stripe, order management, and admin dashboard. Built with modern technologies and following best practices.',
      multipleImages: [project1_1, project1_2, project1_3]
    },
    {
      id: 2,
      title: 'User Data Manager – JSON CRUD Web Application',
      description: 'A basic web app that performs CRUD operations on user data stored in a local data.json file. Great for understanding core data handling without a database.',
      image: project2_2,
      technologies: ['React', 'Bootstrap', 'Json-Server'],
      githubUrl: 'https://github.com/Varun-Ravula/user-management-system',
      liveUrl: 'https://user-management-system-eight-sigma.vercel.app/',
      category: 'Frontend',
      longDescription: 'A comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment integration with Stripe, order management, and admin dashboard. Built with modern technologies and following best practices.',
      multipleImages: [project2_1, project2_2, project2_3]
    },
    {
      id: 3,
      title: 'Responsive Restaurant Website – Static UI Design',
      description: 'A static restaurant website built with HTML and CSS, featuring a responsive and interactive layout. Created before learning React for practicing UI design.',
      image: project3_1,
      technologies: ['Html', 'Css', 'Bootstrap', 'Javascript'],
      githubUrl: 'https://github.com/Varun-Ravula/Responsive-Restaurant-Website',
      liveUrl: '',
      category: 'Frontend',
      longDescription: 'A comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment integration with Stripe, order management, and admin dashboard. Built with modern technologies and following best practices.',
      multipleImages: [project3_1, project3_2, project3_3]
    },
    {
      id: 4,
      title: 'eVote – Online Voting System using PHP & MySQL',
      description: 'An online voting system built with PHP and MySQL on XAMPP. Users can register, log in, and cast votes securely through the web.',
      image: project4_3,
      technologies: ['Html', 'css', 'Bootstrap', 'Php', 'Xampp', 'Mysql'],
      githubUrl: 'https://github.com/Varun-Ravula/Online-Voting-System',
      liveUrl: '',
      category: 'Full Stack',
      longDescription: 'A comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment integration with Stripe, order management, and admin dashboard. Built with modern technologies and following best practices.',
      multipleImages: [project4_1, project4_2, project4_3]
    }
  ]
  // use state for storing selected category
  const [selectedCategory, setSelectedCategory] = useState('All');

  // creating state for selected project
  const [selectedProject, setSelectedProject] = useState(null);
  // creating state for modal 
  const [showModal, setShowModal] = useState(false);


  // array of categories for rendering buttons
  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

  // creating filtered projects
  const fliteredProjects = selectedCategory === 'All' ? projects : projects.filter(project => project.category === selectedCategory);

  // handle modal
  const handleModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  }

  return (
    <div className='projectsSection p-3'>
      <h4 className="mainHeadingInProject text-center display-6 fw-bold mb-3" data-aos="fade-up">Featured Projects</h4>
      <div className="btn-category-group flex-wrap">
        <ButtonGroup className="mt-4 flex-wrap" data-aos="fade-up" data-aos-delay="200">
          {categories.map((cat, index) => <Button key={index} className='m-1 category-btn' size="sm" variant={cat == selectedCategory ? 'primary' : 'outline-primary'} onClick={() => setSelectedCategory(cat)} >
            {cat}
          </Button>)}
        </ButtonGroup>
      </div>
      <div className="projects mt-4">
        {fliteredProjects.length == 0 ? <div className="">
          <h4 className="text-center text-danger mt-5" data-aos="fade-up" data-aos-delay="200">There is no projects available based on filter option!</h4>
          <p className='text-muted text-center' data-aos="fade-up" data-aos-delay="300">Try other filters.</p>
        </div> :
          <Row>
            {/* card */}
            {fliteredProjects.map((project, index) => (
              <Col lg={4} md={4} sm={6} key={index} className='m-auto'>
                <div className='card p-3 m-2 projectCard' data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="card-header card-image-wrapper">
                    <img src={project.image} alt={project.title} onError={(e) => e.target.src = defaultProjectImage} className='projectImage' />
                    <div className="overlay">
                      <Button variant='light' onClick={() => handleModal(project)}><FaRegEye /> View More</Button>
                      <a href={project.githubUrl} target='_blank'><Button variant='light'><FaGithub /> Github url</Button></a>
                    </div>
                  </div>
                  <div className="card-body p-3">
                    <Badge className='mb-3'>{project.category}</Badge>
                    <h5 className='card-title'>{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    {project.technologies.map((technology, index) => (
                      <Badge bg="secondary" key={index} className='m-1'>{technology}</Badge>
                    ))}

                  </div>
                </div>
              </Col>
            ))}
          </Row>
        }

        {/* modal dialog box */}
        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{selectedProject?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedProject &&
              <div className='modal-content p-2'>
                <div>
                  <Carousel interval={1000}>
                    {selectedProject?.multipleImages.map((imageSlide, index) =>
                      <Carousel.Item key={index}>
                        <img src={imageSlide} alt={selectedProject.title} onError={(e) => e.target.src = defaultProjectImage} className="modal-image mb-4"></img>
                      </Carousel.Item>
                    )}
                  </Carousel>
                </div>
                <div className="">
                  <p className='mb-3'>{selectedProject.longDescription}</p>
                  <h4>Technologies Used:</h4>
                  {selectedProject.technologies.map((tech, index) => <Badge key={index} bg="primary" className='mb-2 me-2'>{tech}</Badge>)}
                </div>
              </div>}
          </Modal.Body>
          <Modal.Footer>
            <Button variant={'outline-dark'} className='shadow' href={selectedProject?.githubUrl} target='_blank'><FaGithub /> View Code</Button>
            {selectedProject?.liveUrl.length == 0 ? <Button className='disabled' variant='outline-dark'>Live Demo is not available</Button> : <Button variant={'outline-dark'} className='shadow' href={selectedProject?.liveUrl} target='_blank'><ImShare /> Live Demo</Button>}
          </Modal.Footer>
        </Modal>

      </div>
    </div>
  )
}

export default Projects;
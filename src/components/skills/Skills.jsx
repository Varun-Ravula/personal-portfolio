import React from 'react'
import './Skills.css';
import { Row, Col } from 'react-bootstrap';

// importing icons
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaNpm,FaGithub,FaGitSquare } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

function Skills() {

  // technical skills 
  const frontend = [
    { name: "HTML", logo: <FaHtml5 /> },
    { name: "CSS", logo: <FaCss3Alt /> },
    { name: "Bootstrap", logo: <FaBootstrap /> },
    { name: "Javascript", logo: <RiJavascriptFill /> },
    { name: "React.js", logo: <FaReact /> }
  ];

  const backend = [
    { name: "Node.js", logo: <FaNodeJs /> },
    { name: "Express.js", logo: <SiExpress /> },
    { name: "MongoDB", logo: <SiMongodb /> }
  ]

  const tools = [
    { name: "Git", logo: <FaGitSquare /> },
    { name: "VS code", logo: <VscVscode /> },
    { name: "NPM tool", logo: <FaNpm /> },
    {name:"Github", logo:<FaGithub />}
  ]

  return (
    <div className='skillsSection p-4'>
      <h4 className='text-center display-6 fw-bold mt-4 mb-3 mainHeadingInSkillsSection' data-aos="fade-up">Skills & Technologies</h4>
      <Row>
        <Col lg={6} className='p-3' data-aos="fade-right">
          <h4 className='skillsHeading fs-3 mb-2'>Technical Skills</h4>
          <div className="card skills-bg-card p-3">
            <h3 className='fs-4 mb-3' data-aos="fade-up">Frontend Technologies:</h3>
            <Row>
            {frontend.map((skill, index) => (
              <Col xs={6} sm={4} md={4} lg={4}  className='m-auto' key={index}>
              <div className="card m-1 text-center skills-card" key={index} data-aos="fade-up" data-aos-delay={index*100}>
                <p className='skillLogo'>{skill.logo}</p>
                <div className='card-body'>
                  <h2 className='fs-5'>{skill.name}</h2>
                </div>
              </div>
              </Col>
              ))}
              </Row>
            <h3 className='fs-4 mb-3 mt-3' data-aos="fade-up">Backend Technologies:</h3>
            <Row>
            {backend.map((skill,index)=>(
              <Col xs={6} sm={4} md={4} lg={4} key={index} className='m-auto'>
                <div className='card m-1 text-center skills-card p-1' data-aos="fade-up" data-aos-delay={index*100}>
                  <p className="skillLogo">{skill.logo}</p>
                <div className="card-body">
                  <h2 className='fs-4'>{skill.name}</h2>
                </div>
                </div>
            </Col>))}  
            </Row>              
          </div>
        </Col>

        <Col lg={6} className='p-4' data-aos="fade-left">
          <h4 className='skillsHeading fs-3'>Tools & Platforms</h4>
          <div className="card skills-bg-card p-3">
          <Row>
            {tools.map((tool,index)=>(
              <Col xs={6} sm={4} md={4} lg={4} key={index} className='m-auto'>
                <div className='card m-1 text-center skills-card' data-aos="fade-up" data-aos-delay={index*100}>
                  <p className="skillLogo">{tool.logo}</p>
                <div className="card-body">
                  <h2 className='fs-5'>{tool.name}</h2>
                </div>
                </div>
            </Col>))}  
            </Row>     
            </div>         
        </Col>
      </Row>
    </div>
  )
}

export default Skills
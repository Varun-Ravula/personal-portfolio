import React from 'react';
import './Experience.css';
import { Row, Col } from 'react-bootstrap';
import { MdLocationOn, MdDateRange } from 'react-icons/md';

function Experience() {
  const experiences = [
    {
      company: 'PatternLab.ai',
      companyUrl: 'https://patternlab.ai/',
      role: 'Associate Full Stack Developer',
      period: 'August 2025 - April 2026',
      location: 'Hyderabad, Telangana, India',
    details: [
  "Built and delivered full-stack production features using React.js, Nest.js, and MongoDB while collaborating in an agile development environment.",
  "Designed RESTful APIs, integrated third-party services, and optimized frontend-backend workflows to improve platform performance and user experience.",
  "Developed reusable React components, maintained clean GitLab version control practices, and worked closely with cross-functional teams to deliver scalable solutions."
]
    }
  ];

  return (
    <div className='experience-section'>
      <div className='container'>
        <h4 className='text-center display-6 fw-bold main-heading-in-experience mb-3' data-aos='fade-up'>Experience</h4>
        <p className='text-center text-muted mb-5 experience-subtitle' data-aos='fade-up' data-aos-delay='200'>
          Building full stack products with a focus on clean implementation, reliability, and user experience.
        </p>

        <Row className='justify-content-center'>
          <Col lg={10} xl={11}>
            <div className='experience-timeline'>
              {experiences.map((experience, index) => (
                <div className='experience-item' key={index} data-aos='fade-up' data-aos-delay={index * 200}>
                  <div className='experience-marker'></div>
                  <div className='card shadow experience-card p-4'>
                    <div className='d-flex flex-column flex-md-row justify-content-between gap-2 mb-2'>
                      <div>
                        <h5 className='mb-1 experience-company'>
                          <a
                            href={experience.companyUrl}
                            target='_blank'
                            rel='noreferrer noopener'
                            className='experience-company-link'
                            aria-label={`Visit ${experience.company}`}
                          >
                            {experience.company}
                          </a>
                        </h5>
                        <p className='mb-0 experience-role'>{experience.role}</p>
                      </div>
                      <div className='experience-badge align-self-start align-self-md-center'>
                        Full Time
                      </div>
                    </div>
                    <div className='experience-meta mt-3'>
                      <p className='mb-2'><MdDateRange className='me-2' />{experience.period}</p>
                      <p className='mb-0'><MdLocationOn className='me-2' />{experience.location}</p>
                    </div>
                    {experience.details && (
                      <ul className='experience-details mt-3'>
                        {experience.details.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Experience;
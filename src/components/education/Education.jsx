import * as React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import './Education.css';
import { MdLocationOn, MdDateRange } from "react-icons/md";

function MuiTimeline() {

  const education = [
    {
      id: 1,
      education: 'Btech',
      course: 'Computer Science and Engineering',
      college: 'Marri Laxman Reddy Institute of Technology and Management',
      location: 'Hyderabad',
      period: '2021-2025',
      color: 'primary'
    },
    {
      id: 2,
      education: 'Intermediate',
      course: 'MPC',
      college: 'Aplhores Junior College',
      location: 'Karimnagar',
      period: '2019-2021',
      color: 'danger'
    },
    {
      id: 3,
      education: '10th',
      course: '',
      college: 'Kakatiya High School',
      location: 'Jammikunta',
      period: '2019',
      color: 'secondary'
    }

  ];

  return (
    <div className='education-section'>
      <div className="container">
        <h5 className='text-center display-6 fw-bold main-heading-in-education mb-3' data-aos="fade-up">Education:</h5>
        <Timeline position="alternate">
          {education.map((edu, index) =>
            <TimelineItem key={index}>
              <TimelineSeparator data-aos="fade-right">
                <TimelineDot color="secondary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className="card shadow d-flex align-items-center p-3 education-card" data-aos="fade-up" data-aos-delay={index * 500}>
                  <h6>Education: <span className='text-primary'>{edu.education}</span></h6>
                  <p className='text-success'>{edu.course}</p>
                  <p><strong>College/School:</strong> {edu.college}</p>
                  <p className='text-danger'><MdLocationOn /> {edu.location}</p>
                  <p><MdDateRange /> {edu.period}</p>
                </div>
              </TimelineContent>
            </TimelineItem>
          )}
        </Timeline>
      </div>
    </div>
  );
}

export default MuiTimeline;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Resume = () => {
  return (
    <section id="resume">
      <Container>
        <div className="section-title">
          <h2>Resume</h2>
        </div>
        <Row>
          <Col lg={6}>
            <h3 className="resume-title">Download My Resume</h3>
            <div className="resume-item">
              <h4>Download</h4>
              <ul>
                <li><a href="link-to-resume.pdf" download>Download my resume</a></li>
              </ul>
            </div>
          </Col>
          <Col lg={6}>
            <h3 className="resume-title">Proficiencies</h3>
            <div className="resume-item">
              <h4>Languages</h4>
              <ul>
                <li>JavaScript (ES6+)</li>
                <li>HTML & CSS</li>
                <li>Java</li>
                <li>Python</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Frameworks & Libraries</h4>
              <ul>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Bootstrap</li>
                <li>Material UI</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Databases</h4>
              <ul>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Tools & Technologies</h4>
              <ul>
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Jira</li>
                <li>Agile methodologies</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Resume;


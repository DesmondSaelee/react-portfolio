import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import profilePicture from '../images/DesmondPicture.Edited.png';

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row className="justify-content-center">
          
          <Col md={6}>
            <h2>About Me</h2>
            <p>Hello, my name is [Your Name]. I am a web developer with [X] years of experience in building single-page applications using React. I am passionate about creating high-quality, responsive, and user-friendly applications that meet the needs of clients and end-users.</p>
            <p>I have experience working with a variety of technologies, including HTML, CSS, JavaScript, and React. I am constantly learning and staying up-to-date with the latest trends and best practices in web development to ensure that I am providing the best solutions for my clients.</p>
            
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;


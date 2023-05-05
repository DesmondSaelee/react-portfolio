import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <Container>
        <div className="section-title">
          <h2>Portfolio</h2>
        </div>
        <Row>
          <Col md={6} lg={4} className="my-3">
            <Card>
              <Card.Img variant="top" src="path-to-image" />
              <Card.Body>
                <Card.Title>Project Title</Card.Title>
                <Card.Text>
                  A brief description of the project goes here.
                </Card.Text>
                <Button
                  variant="primary"
                  href="path-to-project-repo-on-github"
                  target="_blank"
                >
                  <FaGithub className="me-2" />
                  View on Github
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="my-3">
            <Card>
              <Card.Img variant="top" src="path-to-image" />
              <Card.Body>
                <Card.Title>Project Title</Card.Title>
                <Card.Text>
                  A brief description of the project goes here.
                </Card.Text>
                <Button
                  variant="primary"
                  href="path-to-project-repo-on-github"
                  target="_blank"
                >
                  <FaGithub className="me-2" />
                  View on Github
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="my-3">
            <Card>
              <Card.Img variant="top" src="path-to-image" />
              <Card.Body>
                <Card.Title>Project Title</Card.Title>
                <Card.Text>
                  A brief description of the project goes here.
                </Card.Text>
                <Button
                  variant="primary"
                  href="path-to-project-repo-on-github"
                  target="_blank"
                >
                  <FaGithub className="me-2" />
                  View on Github
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/projects.css";

import projectsJSON from "../../assets/projects.json";

export default function Projects() {
  const [flipped, setFlipped] = useState({});

  const toggleFlip = (key) => {
    setFlipped((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  return (
    <>
      <h3>Projects i worked</h3>
      <Container>
        <Row>
          {projectsJSON.map((project) => (
            <Col xs="12" sm="12" md="6" key={project.key}>
              <div
                class="flip-card"
                onClick={() => {
                  toggleFlip(project.key);
                }}
              >
                <div
                  class="flip-card-inner"
                  style={{
                    transform: flipped[project.key]
                      ? "rotateY(180deg)"
                      : "rotateY(0)",
                  }}
                >
                  <div class="flip-card-front">
                    <img
                      src={project.image}
                      alt="project image"
                      className="metlife"
                    ></img>
                    <h5>
                      <strong className="main-name purple">
                        {project.title}
                      </strong>
                    </h5>
                    <p>{project.description}</p>
                  </div>
                  <div class="flip-card-back">
                    <ul>
                      {project.details.map((detail, index) => {
                        return <li key={index}>{detail}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

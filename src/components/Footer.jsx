import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RenderIcon from "./home/RenderIcon";
import { IoLogoLinkedin } from "react-icons/io5";
import "../styles/footer.scss";

export default function Footer() {
  return (
    <>
      <Container className="container footer-wrapper">
        <Row className="border">
          <Col xs="12" sm="12" md="12" className="first"></Col>
        </Row>
      </Container>
      <Container className="mt-3">
        <Row>
          <Col md="4" className="footer-developedby">
            <p>Designed and Developed by Raffick</p>
          </Col>
          <Col md="4" className="footer-copywright">
            <p>Copyright © 2025</p>
          </Col>
          <Col md="4" className="footer-linkedin">
            <a
              href="https://www.linkedin.com/in/mohamed-raffick-seyan-031675291"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoLinkedin />
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import home from "@/assets/home.png?format=webp&w=600";

export default function Intro() {
  const API = import.meta.env.VITE_NODE_API_HOST;
  const defaultContent = `<p>
            With 12 years of hands-on experience in the software industry,
            including roles at
            <strong className="purple"> IBM and Photon Ltd.</strong>, I bring
            deep expertise in
            <strong className="purple">JavaScript and ReactJS. </strong>
            I’ve developed and maintained complex applications in
            <strong className="purple">
              Banking, Insurance, and E-Commerce sectors.
            </strong>
            I enjoy solving real-world problems through clean, scalable, and
            maintainable code, and I’m always eager to learn and adapt to new
            technologies...
          </p>`;

  const [name, setName] = useState("M Raffick");
  const [content, setContent] = useState(defaultContent);

  useEffect(() => {
    getName();
    getContent();
  }, []);

  async function getName() {
    try {
      const response = await fetch(`${API}/name`);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Name not found");
        } else if (response.status === 500) {
          throw new Error("Server error. Please try again later.");
        } else {
          throw new Error("Unexpected Error..");
        }
      }
      const result = await response.text();
      setName(result);
    } catch (err) {
      console.error("Fetch Failed: ", err);
    }
  }

  async function getContent() {
    await axios
      .get(`${API}/content`)
      .then((result) => {
        setContent(result.data);
      })
      .catch((error) => {
        console.error("Error fetching data::", error);
        setContent(defaultContent);
      });
  }

  return (
    <Container>
      <Row style={{ paddingTop: 30, paddingBottom: 30 }}>
        <Col md={4}>
          <img
            src={home}
            alt="home pic"
            className="img-fluid"
            style={{ maxHeight: "350px" }}
          ></img>
        </Col>
        <Col md={6} className="home-header">
          <p style={{ paddingTop: 15 }}>
            Hi There!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋
            </span>
          </p>

          <h3 className="heading-name">
            I'm
            <strong className="main-name purple"> {name} </strong>
          </h3>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Col>
      </Row>
    </Container>
  );
}

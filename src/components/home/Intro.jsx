import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import home from '@/assets/home.png?format=webp&w=600'

export default function Intro() {
    return (
        <Container>
            <Row style={{ paddingTop: 30, paddingBottom: 30 }}><Col md={4}>
                <img src={home}
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
                        <strong className="main-name purple"> RAFFICK </strong>
                    </h3>

                    <p>With 12 years of hands-on experience in the software industry, including roles at
                        <strong className="purple"> IBM and Photon Ltd.</strong>,
                        I bring deep expertise in <strong className="purple">JavaScript and ReactJS. </strong>
                        I’ve developed and maintained complex applications in
                        <strong className="purple"> Banking, Insurance, and E-Commerce sectors. </strong>
                        I enjoy solving real-world problems through clean, scalable, and maintainable code,
                        and I’m always eager to learn and adapt to new technologies.</p>
                </Col>
            </Row>
        </Container >
    )
}

import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import home from '../assets/home.png'

export default function Home() {
    return (<>
        <Container>
            <Row style={{ paddingTop: 30, paddingBottom: 30 }}>
                <Col md={4}>
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
                        <strong className="main-name"> RAFFICK </strong>
                    </h3>

                    <p>I'm a skilled software developer with experience in JavaScript, ReactJS and Java.
                        I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems.
                        Let's work together to bring your ideas to life!</p>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row>
                <Col md={6}>

                </Col>
            </Row>
        </Container>
    </>
    )
}

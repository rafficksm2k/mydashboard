import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import home from '../assets/home.jpg'

export default function Home() {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <img src={home}
                        alt="home pic"
                        className="img-fluid"
                        style={{ maxHeight: "450px" }}
                    ></img>
                </Col>
                <Col md={6}><h3>Hi.. I am Raffick</h3>
                    <div>Home content in progress...</div>
                </Col>
            </Row>
        </Container>
    )
}

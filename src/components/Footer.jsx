import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../styles/footer.scss'

export default function Footer() {
    return (
        <>
            <Container className="container footer-wrapper">
                <Row className="border">
                    <Col xs="6" sm="6" md='6' className="first"></Col>
                    <Col xs="4" sm="4" md='4' className="second"></Col>
                    <Col xs="2" sm="2" md='2' className="third"></Col>
                </Row>
            </Container>
            <Container className='mt-3'>
                <Row>
                    <Col md="6" className="footer-developedby">
                        <p>Designed and Developed by Raffick</p>
                    </Col>
                    <Col md="6" className="footer-copywright">
                        <p>Copyright © 2025</p>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../styles/footer.scss'

export default function Footer() {
    return (
        <>
            <Container className="container footer-wrapper">
                <Row className="border">
                    <Col xs="12" sm="12" md='12' className="first"></Col>
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

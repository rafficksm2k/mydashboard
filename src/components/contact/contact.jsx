import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import '../../styles/contact.scss'

export default function contact() {
    return (
        <>
            <Container >
                <Row>
                    <Col className='contact' xs="12" sm="12" md='6'>
                        <strong className="main-name purple contact-header"><h1>Contact</h1></strong>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='contact-text'>Your Name</Form.Label>
                                <Form.Control type="email" placeholder="What's your good name?" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='contact-text'>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className='contact-text'>Your Message</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="What you want to say" />
                            </Form.Group>
                            <Button className='send-button' variant="light">Send</Button>
                        </Form>
                    </Col>
                    <Col className='contact-image' xs="12" sm="12" md='6'>
                        <img src='/contact.svg'></img>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

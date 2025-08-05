import React, { useState, useRef } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import emailjs from '@emailjs/browser';
import '../../styles/contact.scss'

export default function contact() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const form = useRef(); // This creates a reference

    const sendEmail = (e) => {
        e.preventDefault();
        console.log('send email========');


        emailjs.sendForm(
            'service_r151vzf',     // Service ID from EmailJS
            'template_jgsapdj',    // Template ID from EmailJS
            form.current,
            'NxBaz8diwrj18tRzD'      // Public Key from EmailJS
        )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <Container >
                <Row>
                    <Col className='contact' xs="12" sm="12" md='6'>
                        <strong className="main-name purple contact-header"><h1>Contact Me</h1></strong>
                        <Form ref={form}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='contact-text'>Your Name</Form.Label>
                                <Form.Control name="name" type="name" placeholder="What's your good name?"
                                    value={name} onChange={(e) => { setName(e.target.value) }} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='contact-text'>Email address</Form.Label>
                                <Form.Control name="email" type="email" placeholder="name@example.com"
                                    value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className='contact-text'>Your Message</Form.Label>
                                <Form.Control name="message" as="textarea" rows={3} placeholder="What you want to say"
                                    value={message} onChange={(e) => { setMessage(e.target.value) }} />
                            </Form.Group>
                            <Button className='send-button' variant="light" onClick={sendEmail}>Send</Button>
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

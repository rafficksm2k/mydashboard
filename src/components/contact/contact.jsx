import React, { useState, useRef } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import emailjs from '@emailjs/browser';
import '../../styles/contact.scss'
import contactImage from '@/assets/contact.svg?w=600&format=webp'

export default function contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [nameValid, setNameValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);
    const [descriptionValid, setDescriptionValid] = useState(true);

    const [successPage, setSuccessPage] = useState(false);
    const form = useRef(); // This creates a reference

    const nameChange = (value) => {
        setName(value);
        if (value == '' || value == null)
            setNameValid(false);
        else
            setNameValid(true);
    }

    const emailChange = (value) => {
        setEmail(value);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value || !emailRegex.test(value)) {
            setEmailValid(false);
        } else {
            setEmailValid(true);
        }
    };

    const messageChange = (value) => {
        setMessage(value);
        if (value == '' || value == null)
            setDescriptionValid(false);
        else
            setDescriptionValid(true);
    }

    const sendEmail = (e) => {
        e.preventDefault();
        if (name == '' || name == null)
            setNameValid(false);
        if (email == '' || email == null)
            setEmailValid(false);
        if (message == '' || message == null)
            setDescriptionValid(false);

        if (nameValid && emailValid && descriptionValid) {
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
            setSuccessPage(true);
        }
    };

    return (
        <>
            <Container >
                <Row>
                    <Col className='contact' xs="12" sm="12" md='6'>
                        <strong className="main-name purple contact-header"><h1>Contact Me</h1></strong>
                        {
                            !successPage ?
                                <Form ref={form}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label className='contact-text'>Your Name</Form.Label>
                                        <Form.Control name="name" type="name" placeholder="What's your good name?"
                                            value={name} onChange={(e) => { nameChange(e.target.value) }} />
                                        {!nameValid ? <Form.Label className='contact-text red'>Please fill Your Name</Form.Label> : null}
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label className='contact-text'>Email address</Form.Label>
                                        <Form.Control name="email" type="email" placeholder="name@example.com"
                                            value={email} onChange={(e) => { emailChange(e.target.value) }} />
                                        {!emailValid ? <Form.Label className='contact-text red'>Please fill Your Email</Form.Label> : null}
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label className='contact-text'>Your Message</Form.Label>
                                        <Form.Control name="message" as="textarea" rows={3} placeholder="What you want to say"
                                            value={message} onChange={(e) => { messageChange(e.target.value) }} />
                                        {!descriptionValid ? <Form.Label className='contact-text red'>Please fill the description</Form.Label> : null}
                                    </Form.Group>
                                    <Button className='send-button' variant="light" onClick={sendEmail}>Send</Button>
                                </Form>
                                : <div>
                                    <p>Email sent successfully!</p>
                                    <p>Go to <strong><a href='/'>Home</a></strong> page</p>
                                </div>
                        }
                    </Col>
                    <Col className='contact-image' xs="12" sm="12" md='6'>
                        <img src={contactImage}></img>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

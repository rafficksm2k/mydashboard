import React, { useState, useRef } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import emailjs from '@emailjs/browser';
import '../../styles/contact.scss'
import contactImage from '@/assets/contact.svg?w=600&format=webp'
import ContactFormLabel from './ContactFormLabel'
import ContactSuccessPage from './ContactSuccessPage'

export default function contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [nameValid, setNameValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);
    const [messageValid, setMessageValid] = useState(true);

    const [successPage, setSuccessPage] = useState(false);
    const form = useRef(); // This creates a reference

    const nameChange = (value) => {
        console.log('dgsdgsgsgsdgs');

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
            setMessageValid(false);
        else
            setMessageValid(true);
    }

    const formDetails = [{
        label: 'Your Name',
        labelClassName: 'contact-text',
        errorLabel: 'Please fill your name',
        errorLabelClassName: 'contact-text red',
        inputName: 'name',
        inputType: 'name',
        inputPlaceholder: 'Whats your good name?',
        inputChange: nameChange,
        inputValue: name,
        isValid: nameValid
    },
    {
        label: 'Your Email',
        labelClassName: 'contact-text',
        errorLabel: 'Please fill your email',
        errorLabelClassName: 'contact-text red',
        inputName: 'email',
        inputType: 'email',
        inputPlaceholder: 'name@example.com',
        inputChange: emailChange,
        inputValue: email,
        isValid: emailValid
    },
    {
        label: 'Your Message',
        labelClassName: 'contact-text',
        errorLabel: 'Please fill your message',
        errorLabelClassName: 'contact-text red',
        inputName: 'message',
        inputType: 'message',
        inputPlaceholder: 'What you want to say?',
        inputChange: messageChange,
        inputValue: message,
        isValid: messageValid
    }];

    const sendEmail = (e) => {
        e.preventDefault();

        if (name == '' || name == null)
            setNameValid(false);
        if (email == '' || email == null)
            setEmailValid(false);
        if (message == '' || message == null)
            setMessageValid(false);

        if (nameValid && emailValid && messageValid) {
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
        <Container >
            <Row>
                <Col className='contact' xs="12" sm="12" md='6'>
                    <strong className="main-name purple contact-header"><h1>Contact Me</h1></strong>
                    {
                        !successPage ?
                            <Form ref={form}>

                                {formDetails.map((detail, index) =>
                                (
                                    <Form.Group className="mb-3" key={index} controlId="exampleForm.ControlInput1">
                                        <ContactFormLabel text={detail.label} classNme={detail.labelClassName} />
                                        <Form.Control name={detail.inputName} type={detail.inputType} placeholder={detail.inputPlaceholder}
                                            value={detail.inputValue} onChange={(e) => { detail.inputChange(e.target.value) }} />
                                        {!detail.isValid ?
                                            <ContactFormLabel text={detail.errorLabel} classNme={detail.errorLabelClassName} /> : null}
                                    </Form.Group>
                                ))
                                }

                                <Button className='send-button' variant="light" onClick={sendEmail}>Send</Button>
                            </Form>
                            : <ContactSuccessPage />
                    }
                </Col>
                <Col className='contact-image' xs="12" sm="12" md='6'>
                    <img src={contactImage}></img>
                </Col>
            </Row>
        </Container>
    )
}

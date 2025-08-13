import React, { useState, useRef } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import emailjs from '@emailjs/browser';
import '../../styles/contact.scss'
import contactImage from '@/assets/contact.svg?w=600&format=webp'
import ContactFormLabel from './ContactFormLabel'
import ContactSuccessPage from './ContactSuccessPage'

export default function contact() {

    const initValue = {
        name: '',
        email: '',
        message: ''
    }

    const initValid = {
        name: true,
        email: true,
        message: true
    }

    const [formValues, setFormValues] = useState(initValue)
    const [formValid, setFormValid] = useState(initValid)


    const [successPage, setSuccessPage] = useState(false);
    const form = useRef(); // This creates a reference

    const onInputChange = (value, type, validType) => {
        setFormValues(prev => ({
            ...prev, [type]: value
        }));

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (type === 'email' && (!value || !emailRegex.test(value))) {
            setFormValid(prev => ({
                ...prev, [validType]: false
            }));
        }

        else {
            if (value == '' || value == null) {
                setFormValid(prev => ({
                    ...prev, [validType]: false
                }));
            }

            else {
                setFormValid(prev => ({
                    ...prev, [validType]: true
                }));
            }
        }

    }

    const formDetails = [{
        label: 'Your Name',
        labelClassName: 'contact-text',
        errorLabel: 'Please fill your name',
        errorLabelClassName: 'contact-text red',
        inputName: 'name',
        inputType: 'name',
        inputPlaceholder: 'Whats your good name?',
        inputChange: onInputChange,
        validType: 'name',
        inputValue: formValues['name'],
        isValid: formValid['name']
    },
    {
        label: 'Your Email',
        labelClassName: 'contact-text',
        errorLabel: 'Please fill your email',
        errorLabelClassName: 'contact-text red',
        inputName: 'email',
        inputType: 'email',
        inputPlaceholder: 'name@example.com',
        inputChange: onInputChange,
        inputValue: formValues['email'],
        validType: 'email',
        isValid: formValid['email']
    },
    {
        label: 'Your Message',
        labelClassName: 'contact-text',
        errorLabel: 'Please fill your message',
        errorLabelClassName: 'contact-text red',
        inputName: 'message',
        inputType: 'message',
        inputPlaceholder: 'What you want to say?',
        inputChange: onInputChange,
        inputValue: formValues['message'],
        validType: 'message',
        isValid: formValid['message']
    }];

    const sendEmail = (e) => {
        e.preventDefault();
        const newValid = {};
        Object.entries(formValues).forEach(([key, value]) => {

            if (value == '' || value == null) {
                newValid[key] = false;
                setFormValid(newValid);
            }
            else {
                newValid[key] = true;
                setFormValid(newValid);
            }
        });

        if (Object.values(newValid).every(value => value === true)) {

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
                                            value={detail.inputValue} onChange={(e) => { detail.inputChange(e.target.value, detail.inputName, detail.validType) }} />
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

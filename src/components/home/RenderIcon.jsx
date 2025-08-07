import React from 'react'
import { Col } from 'react-bootstrap';

export default function RenderIcon({ icon: Icon, text }) {
    return (
        <Col xs={4} md={2} className='tech-icons'>
            <Icon />
            <p className='tech-text purple'>{text}</p>
        </Col>
    )
}

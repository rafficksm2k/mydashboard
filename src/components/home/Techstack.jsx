import React from 'react'
import { DiJavascript1, DiReact, DiJava } from "react-icons/di";
import { BiLogoRedux } from "react-icons/bi";

import { Container, Row, Col } from 'react-bootstrap';

export default function Techstack() {
    return (
        <Container>
            <Row style={{ paddingBottom: "30px", paddingLeft: "60px" }}>
                <Col xs={4} md={2} className='tech-icons'>
                    <DiJavascript1 />
                </Col>
                <Col xs={4} md={2} className='tech-icons'>
                    <DiReact />
                </Col>
                <Col xs={4} md={2} className='tech-icons'>
                    <BiLogoRedux />
                </Col>
                <Col xs={4} md={2} className='tech-icons'>
                    <DiJava />
                </Col>
                <Col xs={4} md={2} className='tech-icons'>
                    <DiJava />
                </Col>
            </Row>
        </Container>

    )
}

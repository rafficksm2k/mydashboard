import React from 'react'
import { DiJavascript1, DiReact, DiJava, DiBootstrap } from "react-icons/di";
import { BiLogoRedux } from "react-icons/bi";

import { Container, Row, Col } from 'react-bootstrap';

export default function Techstack() {
    return (
        <Container>
            <Row style={{ paddingBottom: "30px", paddingLeft: "60px" }}>
                <Col xs={4} md={2} className='tech-icons'>
                    <DiJavascript1 />
                    <p className='tech-text purple'>Javascript</p>
                </Col>
                <Col xs={4} md={2} className='tech-icons'>
                    <DiReact />
                    <p className='tech-text purple'>ReactJS</p>
                </Col>
                <Col xs={4} md={2} className='tech-icons'>
                    <BiLogoRedux />
                    <p className='tech-text purple'>Redux</p>
                </Col>
                <Col xs={4} md={2} className='tech-icons'>
                    <DiJava />
                    <p className='tech-text purple'>Java</p>
                </Col>
                <Col xs={4} md={2} className='tech-icons'>
                    <DiBootstrap />
                    <p className='tech-text purple'>Bootstrap</p>
                </Col>
            </Row>
        </Container>

    )
}

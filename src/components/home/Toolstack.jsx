import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { SiWebpack } from "react-icons/si";
import { DiGit, DiDocker, DiOpenshift } from "react-icons/di";


export default function Toolstack() {
    return (
        <Container>
            <Row style={{ paddingBottom: "30px", paddingLeft: "60px" }}>
                <Col xs={4} md={2} className='tech-icons'>
                    <DiGit />
                </Col>
                <Col xs={4} md={2} className='tech-icons'>
                    <DiDocker />
                </Col>
                <Col xs={4} md={2} className='tech-icons'>
                    <DiOpenshift />
                </Col>
                <Col xs={4} md={2} className='tech-icons'>
                    <SiWebpack />
                </Col>
                <Col xs={4} md={2} className='tech-icons'>
                    <SiWebpack />
                </Col>
            </Row>
        </Container>
    )
}

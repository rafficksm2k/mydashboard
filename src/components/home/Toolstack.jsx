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
                    <p className='tech-text purple'>GIT</p>
                </Col>
                <Col xs={4} md={2} className='tech-icons'>
                    <DiDocker />
                    <p className='tech-text purple'>Docker</p>
                </Col>
                <Col xs={4} md={2} className='tech-icons'>
                    <DiOpenshift />
                    <p className='tech-text purple'>Openshift</p>
                </Col>
                <Col xs={4} md={2} className='tech-icons'>
                    <SiWebpack />
                    <p className='tech-text purple'>Webpack</p>
                </Col>
                <Col xs={4} md={2} className='tech-icons'>
                    <SiWebpack />
                    <p className='tech-text purple'>Webpack</p>
                </Col>
            </Row>
        </Container>
    )
}

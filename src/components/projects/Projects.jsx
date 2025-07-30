import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../styles/projects.css'

export default function Projects() {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <>
            <h3>Projects</h3>
            <Container>
                <Row>
                    <Col xs="12" sm="12" md='6' >
                        <div class="flip-card" onClick={() => { setIsFlipped(!isFlipped) }}>
                            <div class="flip-card-inner" style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)' }}>
                                <div class="flip-card-front">
                                    <img src='/metlife.jpg' className='metlife'></img>
                                    <h4><strong className="main-name purple">MetLife Insurance Portal </strong></h4>
                                    <p>React-based insurance platform for data visualization and policy management.</p>
                                </div>
                                <div class="flip-card-back">
                                    <ul>

                                        <li>
                                            Developed a responsive insurance portal with dynamic dashboards and secure registration.
                                        </li>
                                        <li>Migrated app to IBM Cloud (Openshift, Docker, Helm, Kubernetes).</li>
                                        <li>Improved performance by 60% with lazy loading and optimized components.</li>
                                        <li>Achieved 90% unit test coverage using Enzyme, Mocha, and Chai.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col xs="12" sm="12" md='6' >
                        <div class="flip-card" onClick={() => { setIsFlipped(!isFlipped) }}>
                            <div class="flip-card-inner" style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)' }}>
                                <div class="flip-card-front">
                                    <img src='/ssbt.jpg' className='metlife'></img>
                                    <h4><strong className="main-name purple">State Street Bank – Financial Web Solutions</strong></h4>
                                    <p>React-based insurance platform for data visualization and policy management.</p>
                                </div>
                                <div class="flip-card-back">
                                    <ul>
                                        <li>Designed and developed secure web applications for State Street Bank (www.statestreet.com), ensuring compliance with banking and financial regulations.</li>
                                        <li>Focused on data protection, responsive UI, and performance optimization tailored for enterprise-scale financial workflows.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container >

        </>
    )
}

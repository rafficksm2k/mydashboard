import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../styles/projects.css'

export default function Projects() {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isSSBTFlipped, setIsSSBTFlipped] = useState(false);
    const [isWalgreensFlipped, setIsWalgreensFlipped] = useState(false);
    const [isJnJFlipped, setIsJnJFlipped] = useState(false);
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
                                    <h5><strong className="main-name purple">MetLife Insurance Portal </strong></h5>
                                    <p>React-based insurance platform for data visualization and policy management.</p>
                                </div>
                                <div class="flip-card-back">
                                    <ul>
                                        <li>
                                            Developed a responsive insurance portal with dynamic dashboards and secure registration.
                                        </li>
                                        <li>Migrated app to IBM Cloud (Openshift, Docker, Helm, Kubernetes).</li>
                                        <li>Improved performance by 60% with lazy loading and achieved 90% unit test coverage using Enzyme, Mocha, and Chai.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col xs="12" sm="12" md='6' >
                        <div class="flip-card" onClick={() => { setIsSSBTFlipped(!isSSBTFlipped) }}>
                            <div class="flip-card-inner" style={{ transform: isSSBTFlipped ? 'rotateY(180deg)' : 'rotateY(0)' }}>
                                <div class="flip-card-front">
                                    <img src='/ssbt.jpg' className='metlife'></img>
                                    <h5><strong className="main-name purple">State Street Bank – Financial Web Solutions</strong></h5>
                                    <p>Secure banking portal for financial operations and compliance</p>
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

                <Row>
                    <Col xs="12" sm="12" md='6' >
                        <div class="flip-card" onClick={() => { setIsWalgreensFlipped(!isWalgreensFlipped) }}>
                            <div class="flip-card-inner" style={{ transform: isWalgreensFlipped ? 'rotateY(180deg)' : 'rotateY(0)' }}>
                                <div class="flip-card-front">
                                    <img src='/walgreens.jpg' className='metlife'></img>
                                    <h5><strong className="main-name purple">Walgreens – E-Commerce Platform</strong></h5>
                                    <p>Optimized high-traffic retail landing pages with React, enhancing performance and user experience.</p>
                                </div>
                                <div class="flip-card-back">
                                    <ul>
                                        <li>Developed and optimized high-traffic E-Commerce landing pages, improving load time by 80% for Walgreens (www.walgreens.com).</li>
                                        <li>Used JavaScript (ES6), React and Redux to build modular, scalable components.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col xs="12" sm="12" md='6' >
                        <div class="flip-card" onClick={() => { setIsJnJFlipped(!isJnJFlipped) }}>
                            <div class="flip-card-inner" style={{ transform: isJnJFlipped ? 'rotateY(180deg)' : 'rotateY(0)' }}>
                                <div class="flip-card-front">
                                    <img src='/jj.jpg' className='metlife'></img>
                                    <h5><strong className="main-name purple"> Johnson & Johnson – Global Multisite Platform</strong></h5>
                                    <p>Developed and maintained a Drupal-based, Java/GWT/PHP platform supporting sites.</p>
                                </div>
                                <div class="flip-card-back">
                                    <ul>
                                        <li>Collaborated in building J&J’s centralized global digital platform, supporting over 500 brand and product websites using Drupal for content management.</li>
                                        <li>Developed scalable backend systems using Java, PHP, and Google Web Toolkit (GWT) for interactive modules and business logic.</li>
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

import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../styles/projects.css'

export default function Projects() {
    const [flipped, setFlipped] = useState({});

    const toggleFlip = (key) => {
        setFlipped((prev) => ({
            ...prev,
            [key]: !prev[key]
        }));
    }

    const projects = [{
        name: 'Metlife',
        title: 'MetLife Insurance Portal',
        image: '/metlife.webp',
        description: 'React-based insurance platform for data visualization and policy management.',
        details: ['Developed a responsive insurance portal with dynamic dashboards and secure registration.',
            'Migrated app to IBM Cloud (Openshift, Docker, Helm, Kubernetes).',
            'Improved performance by 60% with lazy loading and achieved 90% unit test coverage using Enzyme and Chai.'
        ]
    },
    {
        key: 'ssbt',
        title: 'State Street Bank – Financial Web Solutions',
        image: '/ssbt.jpg',
        description: 'Secure banking portal for financial operations and compliance',
        details: [
            'Developed secure web applications for State Street Bank (www.statestreet.com), ensuring compliance with banking and financial regulations.',
            'Focused on responsive UI and performance optimization tailored for enterprise-scale financial workflows.',
        ],
    },
    {
        key: 'walgreens',
        title: 'Walgreens – E-Commerce Platform',
        image: '/walgreens.webp',
        description: 'Optimized high-traffic retail landing pages with React, enhancing performance and user experience.',
        details: [
            'Developed and optimized high-traffic E-Commerce landing pages, improving load time by 80% for Walgreens (www.walgreens.com).',
            'Used JavaScript (ES6), React and Redux to build modular, scalable components.',
        ],
    },
    {
        key: 'jnj',
        title: 'Johnson & Johnson – Global Multisite Platform',
        image: '/jj.webp',
        description: 'Developed and maintained a Drupal-based, Java/GWT/PHP platform sites.',
        details: [
            'Collaborated in building J&J’s centralized global digital platform and product websites using Drupal for content management.',
            'Developed scalable systems using Java, PHP and Google Web Toolkit (GWT) for interactive modules and business logic.',
        ],
    }];
    return (
        <>
            <h3>Projects i worked</h3>
            <Container>
                <Row>
                    {
                        projects.map((project) => (
                            <Col xs="12" sm="12" md='6' key={project.key}>
                                <div class="flip-card" onClick={() => { toggleFlip(project.key) }}>
                                    <div class="flip-card-inner" style={{ transform: flipped[project.key] ? 'rotateY(180deg)' : 'rotateY(0)' }}>
                                        <div class="flip-card-front">
                                            <img src={project.image} className='metlife'></img>
                                            <h5><strong className="main-name purple">{project.title}</strong></h5>
                                            <p>{project.description}</p>
                                        </div>
                                        <div class="flip-card-back">
                                            <ul>
                                                {project.details.map((detail, index) => {
                                                    return (
                                                        <li key={index}>{detail}</li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container >

        </>
    )
}

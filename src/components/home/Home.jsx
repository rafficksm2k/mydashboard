import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWorkOutline, MdOutlineSchool } from "react-icons/md";
import home from '../../assets/home.png'
import '../../styles/home.scss'
import Techstack from './Techstack'
import Toolstack from './Toolstack'

export default function Home() {
    return (<>
        <Container>
            <Row style={{ paddingTop: 30, paddingBottom: 30 }}>
                <Col md={4}>
                    <img src={home}
                        alt="home pic"
                        className="img-fluid"
                        style={{ maxHeight: "350px" }}
                    ></img>
                </Col>
                <Col md={6} className="home-header">
                    <p style={{ paddingTop: 15 }}>
                        Hi There!{" "}
                        <span className="wave" role="img" aria-labelledby="wave">
                            👋
                        </span>
                    </p>

                    <h3 className="heading-name">
                        I'm
                        <strong className="main-name purple"> RAFFICK </strong>
                    </h3>

                    <p>With 12 years of hands-on experience in the software industry, including roles at
                        <strong className="purple"> IBM and Photon Ltd.</strong>,
                        I bring deep expertise in <strong className="purple">JavaScript and ReactJS. </strong>
                        I’ve developed and maintained complex applications in
                        <strong className="purple"> Banking, Insurance, and E-Commerce sectors. </strong>
                        I enjoy solving real-world problems through clean, scalable, and maintainable code,
                        and I’m always eager to learn and adapt to new technologies.</p>
                </Col>
            </Row>
        </Container >
        <Container>
            <Row>
                <Col md={12}>
                    <h2 className="project-heading">
                        Professional <strong className="purple">Skillset </strong>
                    </h2>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Techstack />
                </Col>
            </Row>
            <Row>

                <Col md={12}>
                    <h2 className="project-heading">
                        Tools <strong className="purple">I use </strong>
                    </h2>
                    <Toolstack />
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <h2 className="project-heading">
                        Work <strong className="purple">Experience </strong>
                    </h2>
                </Col>
            </Row>

            <Row>
                <Col md={12}>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgba(30, 68, 72, 1)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgba(30, 68, 72, 1)' }}
                            date="2018 - 2023"
                            iconStyle={{ background: 'rgba(30, 68, 72, 1)', color: '#fff' }}
                            icon={<MdWorkOutline />}
                        >
                            <h3 className="vertical-timeline-element-title"><strong className="purple">System Analyst @IBM</strong></h3>
                            <h4 className="vertical-timeline-element-subtitle">Chennai, India</h4>
                            <p>
                                Insurance Web Development
                            </p>
                            <p>
                                React JS | Javascript | Docker | IBM Openshift | Jenkins | JIRA
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgba(30, 68, 72, 1)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb( 30, 68, 72, 1)' }}
                            date="2010 - 2017"
                            iconStyle={{ background: 'rgb( 30, 68, 72, 1)', color: '#fff' }}
                            icon={<MdWorkOutline />}
                        >
                            <h3 className="vertical-timeline-element-title"><strong className="purple">Senior Software Engineer @Photon Interactive</strong></h3>
                            <h4 className="vertical-timeline-element-subtitle">Chennai, India</h4>
                            <p>
                                Banking | E-Commerce
                            </p>
                            <p>
                                Java | React JS | Javascript | GWT | Drupal
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            contentStyle={{ background: 'rgb( 30, 68, 72, 1)' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb( 30, 68, 72, 1)' }}
                            date="2007 - 2010"
                            iconStyle={{ background: 'rgb(30, 68, 72, 1)', color: '#fff' }}
                            icon={<MdOutlineSchool />}
                        >
                            <h3 className="vertical-timeline-element-title"><strong className="purple">B.Tech - IT</strong></h3>
                            <h4 className="vertical-timeline-element-subtitle">SSNCE - Chennai</h4>
                            <h4 className="vertical-timeline-element-subtitle">Anna University</h4>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </Col>
            </Row>
        </Container>
    </>
    )
}

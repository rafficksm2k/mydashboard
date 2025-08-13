import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { MdWorkOutline, MdOutlineSchool } from "react-icons/md";

export default function WorkExperience() {
    return (
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
                        <p>Insurance Web Development</p>
                        <p>React JS | Javascript | Docker | IBM Openshift | Jenkins | JIRA</p>
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
                        <p>Banking | E-Commerce</p>
                        <p>Java | React JS | Javascript | GWT | Drupal</p>
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
    )
}

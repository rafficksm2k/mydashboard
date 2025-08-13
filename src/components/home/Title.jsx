import React from 'react'
import { Row, Col } from 'react-bootstrap'

export default function Title({ title1, title2 }) {
    return (
        <Row>
            <Col md={12}>
                <h2 className="project-heading">
                    {title1} <strong className="purple">{title2}</strong>
                </h2>
            </Col>
        </Row>
    )
}

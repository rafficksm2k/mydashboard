import React from 'react'
import { Form } from 'react-bootstrap'

export default function ContactFormLabel({ text, classNme }) {
    return (
        <Form.Label className={classNme}>{text}</Form.Label>
    )
}

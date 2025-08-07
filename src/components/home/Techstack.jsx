import React from 'react'
import { DiJavascript1, DiReact, DiJava, DiBootstrap } from "react-icons/di";
import { BiLogoRedux } from "react-icons/bi";
import { Container, Row } from 'react-bootstrap';

import Tech from './Tech';

export default function Techstack() {
    return (
        <Container>
            <Row style={{ paddingBottom: "30px", paddingLeft: "60px" }}>
                <Tech icon={DiJavascript1} text='Javascript' />
                <Tech icon={DiReact} text='React' />
                <Tech icon={BiLogoRedux} text='Redux' />
                <Tech icon={DiJava} text='Java' />
                <Tech icon={DiBootstrap} text='Bootstrap' />
            </Row>
        </Container>

    )
}

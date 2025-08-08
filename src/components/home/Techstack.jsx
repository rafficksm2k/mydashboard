import React from 'react'
import { DiJavascript1, DiReact, DiJava, DiBootstrap } from "react-icons/di";
import { BiLogoRedux } from "react-icons/bi";
import { Container, Row } from 'react-bootstrap';

import RenderIcon from './RenderIcon';

export default function Techstack() {
    return (
        <Container>
            <Row style={{ paddingBottom: "30px", paddingLeft: "60px" }}>
                <RenderIcon icon={DiJavascript1} text='Javascript' />
                <RenderIcon icon={DiReact} text='React' />
                <RenderIcon icon={BiLogoRedux} text='Redux' />
                <RenderIcon icon={DiJava} text='Java' />
                <RenderIcon icon={DiBootstrap} text='Bootstrap' />
            </Row>
        </Container>

    )
}

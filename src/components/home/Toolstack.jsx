import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { SiWebpack, SiSourcetree } from "react-icons/si";
import { DiGit, DiDocker, DiOpenshift } from "react-icons/di";

import RenderIcon from './RenderIcon';

export default function Toolstack() {
    return (
        <Container>
            <Row style={{ paddingBottom: "30px", paddingLeft: "60px" }}>
                <RenderIcon icon={DiGit} text='GIT' />
                <RenderIcon icon={DiDocker} text='Docker' />
                <RenderIcon icon={DiOpenshift} text='Openshift' />
                <RenderIcon icon={SiWebpack} text='Webpack' />
                <RenderIcon icon={SiSourcetree} text='Sourcetree' />
            </Row>
        </Container>
    )
}

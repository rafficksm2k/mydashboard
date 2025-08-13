import React from 'react'
import { Container } from 'react-bootstrap'
import 'react-vertical-timeline-component/style.min.css';
import '@/styles/home.scss'
import Techstack from './Techstack'
import Toolstack from './Toolstack'
import WorkExperience from './WorkExperience'
import Title from './Title'
import Intro from './Intro'

export default function Home() {
    return (<>
        <Intro />
        <Container>
            <Title title1='Professional' title2='Skillset' />
            <Techstack />
            <Title title1='Tools' title2='I use' />
            <Toolstack />
            <Title title1='Work' title2='Experience' />
            <WorkExperience />
        </Container>
    </>
    )
}

import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

export default function Navigationbar() {
    return (<Container>
        <Nav>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
            <Nav.Link href='/project'>Project</Nav.Link>
            <Nav.Link href='/resume'>Resume</Nav.Link>
        </Nav>
    </Container>
    )
}

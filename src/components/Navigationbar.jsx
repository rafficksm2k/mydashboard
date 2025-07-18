import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import logo from '../assets/react.svg'
import { Link } from 'react-router-dom';

export default function Navigationbar() {
    return (
        <Navbar bg="dark" variant='dark' expand="lg">
            <Container>
                <Navbar.Brand href="/" className="d-flex">
                    <img src={logo} className="img-fluid logo" alt="brand" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to='/project'>Project</Nav.Link>
                        <Nav.Link as={Link} to='/resume'>Resume</Nav.Link>
                        {/* <Nav.Link href='/project'>Project</Nav.Link>
                        The above href makes the page flicker -
                        it will reload the entire page!
                        */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

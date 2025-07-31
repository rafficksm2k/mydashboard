import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import logo from '../../public/raf.jpg'
import { Link } from 'react-router-dom';
import {
    AiOutlineFileText,
    AiOutlineHome,
    AiOutlineFundProjectionScreen
} from "react-icons/ai";

import { MdOutlineContactMail } from "react-icons/md";
import '../styles/navbar.css'

export default function Navigationbar() {
    return (
        <Navbar bg="dark" variant='dark' expand="lg" className="navbar">
            <Container>
                <Navbar.Brand href='/' className="d-flex">
                    <img src={logo} className="img-fluid logo" alt="brand" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" /> {/*mobile view 3 dots*/}
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to='/'>
                            <AiOutlineHome style={{ margin: "0px 3px 5px 0px" }} />
                            Home</Nav.Link>
                        <Nav.Link as={Link} to='/project'>
                            <AiOutlineFundProjectionScreen style={{ margin: "0px 3px 4px 0px" }} />
                            Projects</Nav.Link>
                        <Nav.Link as={Link} to='/resume'>
                            <AiOutlineFileText style={{ margin: "0px 3px 4px 0px" }} />
                            Resume</Nav.Link>
                        <Nav.Link as={Link} to='/contact'>
                            <MdOutlineContactMail style={{ margin: "0px 3px 4px 0px" }} />
                            Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

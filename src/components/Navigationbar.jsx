import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import logo from '/raf.webp'
import {
    AiOutlineFileText,
    AiOutlineHome,
    AiOutlineFundProjectionScreen
} from "react-icons/ai";

import { MdOutlineContactMail } from "react-icons/md";
import '../styles/navbar.css'
import NavBarLinks from './NavBarLinks'

export default function Navigationbar() {
    const [expand, setExpand] = useState(false);
    const navBarValues = [{
        title: 'Home',
        link: '/home',
        icon: AiOutlineHome
    },
    {
        title: 'Projects',
        link: '/project',
        icon: AiOutlineFundProjectionScreen
    },
    {
        title: 'Resume',
        link: '/resume',
        icon: AiOutlineFileText
    },
    {
        title: 'Contact Me',
        link: '/contact',
        icon: MdOutlineContactMail
    }];

    //['Home', 'Projects', 'Resume', 'Contact Me'];
    return (
        <Navbar expanded={expand} bg="dark" variant='dark' expand="lg" className="navbar fixednavbar">
            <Container>
                <Navbar.Brand href='/' className="d-flex">
                    <img src={logo} className="img-fluid logo" alt="brand" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"
                    onClick={() => setExpand(expand ? false : true)} /> {/*mobile view 3 dots*/}
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">

                        {navBarValues.map((navBarValue, index) => (
                            <NavBarLinks key={index} icon={navBarValue.icon} setExpand={setExpand}
                                title={navBarValue.title} link={navBarValue.link} />
                        ))}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

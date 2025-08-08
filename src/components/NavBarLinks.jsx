import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';

export default function NavBarLinks({ icon: Icon, setExpand, title, link, key }) {
    return (
        <Nav.Link key={key} as={Link} to={link} onClick={() => { setExpand(false) }}>
            <Icon style={{ margin: "0px 3px 5px 0px" }} />
            {title}</Nav.Link>
    )
}

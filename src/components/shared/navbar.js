import React from 'react';
import './navbar.css';
import { Navbar, Nav } from 'react-bootstrap';

export const NavBar = (props) => {
    return (
        <div className="NavBar">
            <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
                <Navbar.Brand href="#home">SCHOOL-MS</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto ml-4">
                        <Nav.Link  href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                        <Nav.Link active href="#contact">About</Nav.Link>
                    </Nav>
                    <Nav>
                        <button className="btn btn-primary">Login</button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

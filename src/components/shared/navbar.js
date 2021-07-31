import React from 'react';
import './navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const handleLogin =(props)=>{
    console.log(props);
    props.history.push('/login')
}
const handleRegister =(props)=>{
    console.log(props);
    props.history.push('/register')
}

 const TopNavBar = (props) => {
    return (
        <div className="NavBar">
            <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
                <Navbar.Brand href="#home">SCHOOL-MS</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto ml-4">
                        <Nav.Link  href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                        <Nav.Link  href="#contact">About</Nav.Link>
                    </Nav>
                    <Nav>
                        <button style={{marginRight:"7px",marginBottom:"3px"}} onClick={()=>handleLogin(props)} className="btn btn-primary">Login</button>
                        <button style={{marginBottom:"3px"}} onClick={()=>handleRegister(props)} className="btn btn-primary">Register</button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export const NavBar = withRouter(TopNavBar)
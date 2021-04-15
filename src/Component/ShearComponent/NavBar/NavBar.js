import React from 'react';
import './NavBar.css'
import { Button, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <header className="container">
            <Navbar expand="md">
                <Navbar.Brand href="#home">MASSAGE</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home" >Home</Nav.Link>
                        <Nav.Link href="#link">About Us</Nav.Link>
                        <Nav.Link href="#link">Projects</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                        <Nav.Link href="#link">Admin</Nav.Link>
                    </Nav>
                    <Button variant="success">Login</Button>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default NavBar;
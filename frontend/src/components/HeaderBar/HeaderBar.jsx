import React from "react";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from "react-router-dom"


function HeaderContainer({loggedInUser}) {
    return (
        <div className="header-container">
            <Navbar bg="light" expand="lg">
            <Container>
                {
                    loggedInUser ? 
                    <Navbar.Brand as={Link} to="/">{'GaiGai  |  ' + loggedInUser}</Navbar.Brand>
                    : <Navbar.Brand as={Link} to="/">GaiGai</Navbar.Brand>
                }
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                    {
                        loggedInUser ? 
                        <>
                        <Nav.Link >Log Out</Nav.Link>
                        <Nav.Link as={Link} to="/" >Trips</Nav.Link>
                        <Nav.Link as={Link} to="profile" >Profile</Nav.Link>
                        </> 
                        :
                        <>
                            <Nav.Link as={Link} to="login">Login</Nav.Link>
                            <Nav.Link as={Link} to="signup">Sign Up</Nav.Link>
                        </>
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default HeaderContainer;

/*
<Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
*/
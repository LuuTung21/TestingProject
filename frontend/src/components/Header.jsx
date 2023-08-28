import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { AiOutlineLogin, AiOutlineUserAdd } from 'react-icons/ai';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { LinkContainer } from "react-router-bootstrap"

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" className="px-4">
            <LinkContainer to="/">
                <Navbar.Brand >
                    Shoppable
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <LinkContainer to="/login">
                        <Nav.Link>
                            <AiOutlineLogin size={20} /> Login
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/signup">
                        <Nav.Link>
                            <AiOutlineUserAdd size={20} /> Sign Up
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/cart">
                        <Nav.Link>
                            <RiShoppingCart2Line size={20} /> Cart
                        </Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;

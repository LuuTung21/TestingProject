import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { AiOutlineLogin, AiOutlineUserAdd } from 'react-icons/ai';
import { RiShoppingCart2Line } from 'react-icons/ri';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" className="px-4">
            <Navbar.Brand href="/">
                {/* You can replace the text with your logo image */}
                Main Logo
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link href="/login">
                        <AiOutlineLogin size={20} /> Login
                    </Nav.Link>
                    <Nav.Link href="/signup">
                        <AiOutlineUserAdd size={20} /> Sign Up
                    </Nav.Link>
                    <Nav.Link href="/cart">
                        <RiShoppingCart2Line size={20} /> Cart
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;

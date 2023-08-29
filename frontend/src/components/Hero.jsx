import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Hero = () => {
    return (
        <div className="hero-bg">
            <Container fluid className="hero-container">
                <Row className="align-items-center justify-content-center vh-100">
                    <Col xs={12} md={8} lg={6} xl={4} className="text-center">
                        <h1 className="hero-title">Welcome to Our E-Commerce Store</h1>
                        <p className="hero-description">Discover amazing products at great prices.</p>
                        <div className="hero-buttons">
                            <LinkContainer to="/signup">
                                <Button variant="primary" className="mr-3">Sign Up</Button>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <Button variant="outline-primary">Log In</Button>
                            </LinkContainer>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Hero;

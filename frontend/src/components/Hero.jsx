import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
    return (
        <Container fluid className="home-screen">
            <Row className="align-items-center justify-content-center vh-100">
                <Col xs={12} md={8} lg={6} xl={4} className="text-center">
                    <h1 className="mb-4">Welcome to Our E-Commerce Store</h1>
                    <p className="mb-4">Discover amazing products at great prices.</p>
                    <div className="d-flex justify-content-center">
                        <Button variant="primary" className="mr-3">
                            <a href="/signup" className="text-white text-decoration-none">Sign Up</a>
                        </Button>
                        <Button variant="outline-primary">
                            <a href="/login" className="text-primary text-decoration-none">Log In</a>
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Hero;

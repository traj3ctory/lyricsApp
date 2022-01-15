import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

export default () => (
    <Container className="d-flex h-100 justify-content-center align-items-center" style={{minHeight: "50vh"}}>
        <Spinner animation="grow" variant="primary"/>
    </Container>
);

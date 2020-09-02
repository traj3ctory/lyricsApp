import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

export default () => {
    return (
        <Container className="d-flex justify-content-center">
            <Spinner animation="grow" variant="primary"/>
        </Container>
    )
};

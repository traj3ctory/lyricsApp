import React, { Component } from 'react';
import { Container, Form, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { Consumer } from './../../context';

class Search extends Component {
    state = {
        trackTitle: ''
    };
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    render() {
        return (
            <Consumer>
                {value => {
                    return (
                        <Card>
                            <Card.Body className="mb-4 p-4">
                                <Card.Title className="display-5 text-center">
                                    <i className="fa fa-music"></i>&nbsp;Search for a song
                                </Card.Title>
                                <Card.Text className="lead text-center">
                                    Get the lyrics for any song
                                </Card.Text>
                            </Card.Body>

                            <Form>
                                <Form.Group controlId="search" className="mx-4">
                                    <Form.Label className="sr-only">Search</Form.Label>
                                    <Form.Control type="text" placeholder="Song title..." className="form-control-sm"
                                    name="trackTitle"
                                    value={this.state.trackTitle}
                                    onChange={this.onChange}
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" size="sm">
                                    Submit
                                </Button>
                            </Form>
                        </Card>
                    );
                }}
            </Consumer>
        )
    }
}
export default Search;

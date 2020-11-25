import React, { Component } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { Consumer } from './../../context';

class Search extends Component {
    state = {
        trackTitle: ''
    };

    findTrack = (dispatch, e) => {
        e.preventDefault();

        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then(res => {
            console.log(res.data);
            dispatch({
                type: 'SEARCH_TRACKS',
                payload: res.data.message.body.track_list
            });

            this.setState({trackTitle: ''});
            // this.setState({ track_list: res.data.message.body.track_list });
        })
        .catch(err => console.log(err));
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <Card className="px-4 py-2 mb-4 border-0 shadow">
                            <Card.Body className="mb-4 p-4">
                                <Card.Title className="display-5 text-center">
                                    <i className="fa fa-music"></i>&nbsp;Search for a song
                                </Card.Title>
                                <Card.Text className="lead text-center">
                                    Get the lyrics for any song
                                </Card.Text>
                            </Card.Body>

                            <Form onSubmit={this.findTrack.bind(this, dispatch)}>
                                <Form.Group controlId="search">
                                    <Form.Label className="sr-only">Search</Form.Label>
                                    <Form.Control type="text" placeholder="Song title..." className="form-control-sm"
                                        name="trackTitle"
                                        value={this.state.trackTitle}
                                        onChange={this.onChange}
                                    />
                                </Form.Group>
                                <Button variant="info" type="submit" className="btn-sm mb-3 float-right">
                                <i className="fa fa-search"></i>
                                &nbsp;
                                    Get Track Lyrics
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

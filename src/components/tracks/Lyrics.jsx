import React, { Component } from 'react';
import Spinner from './../layout/Spinner';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import Moment from 'react-moment';

class Lyrics extends Component {
    state = {
        track: {},
        lyrics: {}
    };

    componentDidMount() {
        axios
            .get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res => {
                this.setState({ lyrics: res.data.message.body.lyrics });
                return axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
            })
            // .then(res => {
            //     console.log( res.data.message.body.track);
            .then(res => {
                this.setState({ track: res.data.message.body.track });
            })
            .catch(err => console.log(err));
    }

    render() {
        const { track, lyrics } = this.state;
        return (track === undefined || lyrics === undefined || Object.keys(track).length === 0 || Object.keys(lyrics).length === 0) ? <Spinner />
            : <>
                <Link to="/" className="btn btn-info btn-sm mb-4">
                    <i className="fa fa-chevron-left"></i>&nbsp;Go back
                </Link>
                <Card>
                    <Card.Header>{track.track_name} by{' '}<span className="text-secondary">{track.artist_name}</span></Card.Header>
                    <Card.Body>
                        <Card.Text>{lyrics.lyrics_body}</Card.Text>
                    </Card.Body>
                    <ListGroup className="mt-3">
                        <ListGroup.Item>
                            <strong>Album ID</strong>: {track.album_id}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>Song Genre</strong>: {(track.primary_genres.music_genre_list === []) ? track.primary_genres.music_genre_list[0].music_genre.music_genre_name : '---'}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>Explicit Word</strong>: {track.explicit === 0 ? 'No' : 'Yes'}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>Release Date</strong>: <Moment format="MM/DD/YYYY">{track.first_release_date}</Moment>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </>
    }
}

export default Lyrics

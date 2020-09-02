import React from 'react';
import { Col, Card, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Track = (props) => {
    const { track } = props;
    return (
        <Col md="6">
            <Card className="mb-4 shadow border-0">
                <Card.Body>
                    <Card.Title>
                        {track.artist_name}
                    </Card.Title>
                    <Card.Text>
                        <strong><i className="fa fa-play"></i>&nbsp;Track</strong>: {track.track_name}
                        <br />
                        <strong><i className="fa fa-modx"></i>&nbsp;Album</strong>: {track.album_name}
                    </Card.Text>
                    <Link to={`lyrics/track/${track.track_id}`} className="btn btn-sm btn-block btn-dark">
                        <i className="fa fa-chevron-right"></i>&nbsp; View Lyrics
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Track;

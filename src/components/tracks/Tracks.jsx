import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from './../layout/Spinner';
import Track from './Track';
import { Row } from 'react-bootstrap';

class Tracks extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { track_list, heading  } = value;

                   return ((track_list === undefined) || (track_list.length === 0)) ? <Spinner /> : 
                   <>
                   <h3 className="text-center mb-4"><i className="fa fa-music"></i>&nbsp;{heading}</h3>
                   <Row>
                   {track_list.map(item => (
                       <Track key={item.track.track_id} track={item.track}/>
                   ))}
                   </Row>
</>
                }}
            </Consumer>
        );
    }
}            


export default Tracks;
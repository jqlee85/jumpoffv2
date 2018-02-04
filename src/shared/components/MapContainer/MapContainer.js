import React, {Component} from 'react'
import styles from './MapContainer.css';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  
  componentDidMount() {

  }

  render() {
    return (  
      <Map google={this.props.google} zoom={14}>
        <Marker onClick={this.onMarkerClick} name={'Current location'} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
 apiKey: ('AIzaSyDEUbmgn7oR_cddAXwpAS2z6BxwYTlN8q8')
})(MapContainer);
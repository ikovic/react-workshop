import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import './FavoritesMap.css';

const style = {
  width: '600px',
  height: '600px'
};

class FavoritesMap extends Component {
  onMarkerClick = (props, marker, e) => {
    console.log(props, marker, e);
  };

  render() {
    return (
      <div className="map">
        <Map
          google={this.props.google}
          zoom={13}
          initialCenter={{
            lat: 43.5109992,
            lng: 16.4479944
          }}
          style={style}
          clickableIcons={false}
        >
          <Marker
            onClick={this.onMarkerClick}
            title={'Text tooltip'}
            name={{ id: '123', test: 'test' }}
            position={{
              lat: 43.5109992,
              lng: 16.4479944
            }}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD3wsBIBCbVgvShE_-ZVrFWYvTBximAcLE',
  version: '3'
})(FavoritesMap);

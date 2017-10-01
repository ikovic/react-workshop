import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import './FavoritesMap.css';

const style = {
  width: '600px',
  height: '600px'
};

class FavoritesMap extends Component {
  state = {
    center: {
      lat: 43.5109992,
      lng: 16.4479944
    },
    zoom: 13
  };

  onMarkerClick = (props, marker, e) => {
    console.log(props, marker, e);
  };

  onMapClick = (mapProps, map, clickEvent) => {
    const { latLng: { lat, lng } } = clickEvent;

    return this.props.addMarker({
      title: 'Another',
      name: { id: Date.now(), text: 'YES' },
      position: {
        lat: lat(),
        lng: lng()
      }
    });
  };

  renderMarkers = () =>
    this.props.markers.map(marker => (
      <Marker key={marker.name.id} onClick={this.onMarkerClick} {...marker} />
    ));

  render() {
    const { center, zoom } = this.state;

    return (
      <div className="map">
        <Map
          google={this.props.google}
          zoom={zoom}
          initialCenter={center}
          onClick={this.onMapClick}
          style={style}
          containerStyle={style}
          clickableIcons={false}
        >
          {this.renderMarkers()}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD3wsBIBCbVgvShE_-ZVrFWYvTBximAcLE',
  version: '3'
})(FavoritesMap);

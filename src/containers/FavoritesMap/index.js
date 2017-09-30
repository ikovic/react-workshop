import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './FavoritesMap.css';

const Marker = ({ lat, lng, text }) => <span>{text}</span>;

export default class FavoritesMap extends Component {
  static defaultProps = {
    center: [59.938043, 30.337157],
    zoom: 9
  };

  render() {
    return (
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD3wsBIBCbVgvShE_-ZVrFWYvTBximAcLE' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker lat={59.955413} lng={30.337844} text={'Kreyser Avrora'} />
        </GoogleMapReact>
      </div>
    );
  }
}

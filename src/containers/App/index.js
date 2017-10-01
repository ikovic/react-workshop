import React, { Component } from 'react';

import Header from 'components/Header';
import MarkerList from 'components/MarkerList';
import FavoritesMap from 'containers/FavoritesMap';

import './App.css';

class App extends Component {
  state = {
    markers: [
      {
        title: 'Shows in tooltip',
        name: { id: '123', text: 'test' },
        position: {
          lat: 43.5109992,
          lng: 16.4479944
        }
      }
    ]
  };

  addMarker = marker =>
    this.setState(state => ({
      markers: [...state.markers, marker]
    }));

  removeMarker = markerId =>
    this.setState(state => ({
      markers: state.markers.filter(marker => marker.name.id !== markerId)
    }));

  render() {
    return (
      <div className="App">
        <Header title={'React Workshop @SeekandHit'} />
        <section className="content">
          <FavoritesMap markers={this.state.markers} />
          <MarkerList markers={this.state.markers} removeMarker={this.removeMarker} />
        </section>
      </div>
    );
  }
}

export default App;

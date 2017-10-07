import React, { Component } from 'react';

import Header from 'components/Header';
import MarkerList from 'components/MarkerList';
import AddMarkerModal from 'components/AddMarkerModal';
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
    ],
    addMarkerModal: {
      isOpen: false,
      position: null
    },
    highlightedMarkerId: null
  };

  showAddMarkerModal = position => this.setState({ addMarkerModal: { isOpen: true, position } });

  hideAddMarkerModal = () => this.setState({ addMarkerModal: { isOpen: false, position: null } });

  setHighlightedMarker = markerId => this.setState({ highlightedMarkerId: markerId });

  addMarker = marker =>
    this.setState(state => ({
      markers: [...state.markers, marker]
    }));

  removeMarker = markerId =>
    this.setState(state => ({
      markers: state.markers.filter(marker => marker.name.id !== markerId)
    }));

  render() {
    const { markers, highlightedMarkerId } = this.state;

    return (
      <div className="App">
        <Header title={'React Workshop @SeekandHit'} />
        <section className="content">
          <FavoritesMap
            markers={markers}
            showAddMarkerModal={this.showAddMarkerModal}
            highlightMarker={this.setHighlightedMarker}
          />
          <div>
            <h3 style={{marginLeft: '16px'}}>Favorites</h3>
            <MarkerList
              markers={markers}
              removeMarker={this.removeMarker}
              highlightedMarkerId={highlightedMarkerId}
            />
          </div>
        </section>
        <AddMarkerModal
          hideModal={this.hideAddMarkerModal}
          onSave={this.addMarker}
          {...this.state.addMarkerModal}
        />
      </div>
    );
  }
}

export default App;

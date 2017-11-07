import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from 'components/Header';
import MarkerList from 'components/MarkerList';
import AddMarkerModal from 'components/AddMarkerModal';
import FavoritesMap from 'containers/FavoritesMap';

import './App.css';

class App extends Component {
  state = {
    addMarkerModal: {
      isOpen: false,
      position: null
    },
    highlightedMarkerId: null
  };

  showAddMarkerModal = position => this.setState({ addMarkerModal: { isOpen: true, position } });

  hideAddMarkerModal = () => this.setState({ addMarkerModal: { isOpen: false, position: null } });

  setHighlightedMarker = markerId => this.setState({ highlightedMarkerId: markerId });

  render() {
    const { highlightedMarkerId } = this.state;
    const { markers } = this.props;

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
            <h3 style={{ marginLeft: '16px' }}>Favorites</h3>
            <MarkerList markers={markers} highlightedMarkerId={highlightedMarkerId} />
          </div>
        </section>
        <AddMarkerModal hideModal={this.hideAddMarkerModal} {...this.state.addMarkerModal} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ markers: state.markers.items });

export default connect(mapStateToProps)(App);

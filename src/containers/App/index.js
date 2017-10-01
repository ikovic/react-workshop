import React, { Component } from 'react';

import Header from 'components/Header';
import FavoritesMap from 'containers/FavoritesMap';

import './App.css';

class App extends Component {
  state = {
    markers: [
      {
        title: 'Shows in tooltip',
        name: { id: '123', test: 'test' },
        position: {
          lat: 43.5109992,
          lng: 16.4479944
        }
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <Header title={'React Workshop @SeekandHit'} />
        <section className="content">
          <FavoritesMap />
        </section>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import Header from 'components/Header';
import FavoritesMap from 'containers/FavoritesMap';

import './App.css';

class App extends Component {
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

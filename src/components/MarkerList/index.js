import React from 'react';
import { connect } from 'react-redux';
import { removeMarker } from 'redux/modules/markers';
import './MarkerList.css';

const MarkerItem = ({ marker, removeMarker, highlighted }) => (
  <li className={`markerItem ${highlighted ? 'highlighted' : ''}`}>
    {marker.name.text}
    <button onClick={() => removeMarker(marker.name.id)} className="removeButton">
      Remove
    </button>
  </li>
);

const MarkerList = ({ markers, removeMarker, highlightedMarkerId }) => (
  <ul className="markerList">
    {markers.map(marker => (
      <MarkerItem
        key={marker.name.id}
        marker={marker}
        removeMarker={removeMarker}
        highlighted={marker.name.id === highlightedMarkerId}
      />
    ))}
  </ul>
);

export default connect(null, dispatch => ({ removeMarker: id => dispatch(removeMarker(id)) }))(
  MarkerList
);

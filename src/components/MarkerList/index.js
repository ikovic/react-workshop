import React from 'react';
import './MarkerList.css';

const MarkerItem = ({ marker, removeMarker }) => (
  <li className="markerItem">
    {marker.name.text}
    <button onClick={() => removeMarker(marker.name.id)} className="removeButton">
      Remove
    </button>
  </li>
);

const MarkerList = ({ markers, removeMarker }) => (
  <ul>
    {markers.map(marker => (
      <MarkerItem key={marker.name.id} marker={marker} removeMarker={removeMarker} />
    ))}
  </ul>
);

export default MarkerList;

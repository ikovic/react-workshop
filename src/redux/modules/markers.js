const initialState = {
  items: [
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

export const ADD_MARKER = 'workshop/markers/ADD_MARKER';
export const REMOVE_MARKER = 'workshop/markers/REMOVE_MARKER';

export const addMarker = marker => ({ type: ADD_MARKER, marker });

export const removeMarker = id => ({ type: REMOVE_MARKER, id });

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MARKER:
      return {
        ...state,
        items: [...state.items, action.marker]
      };
    case REMOVE_MARKER:
      return {
        ...state,
        items: state.items.filter(({ name: { id } }) => id !== action.id)
      };
    default:
      return state;
  }
}

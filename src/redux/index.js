import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from 'redux/modules';

const store = createStore(rootReducer, composeWithDevTools());

export default store;

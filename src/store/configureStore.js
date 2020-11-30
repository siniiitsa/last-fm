import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import tracksReducer from './tracks';
import artistReducer from './artist';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  tracks: tracksReducer,
  artist: artistReducer,
});

const configureStore = () => {
  const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));
  return createStore(rootReducer, composedEnhancer);
};

export default configureStore;

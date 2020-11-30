import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import tracksReducer from './tracks';
import artistReducer from './artist';
import searchReducer from './search';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  tracks: tracksReducer,
  artist: artistReducer,
  search: searchReducer,
});

const configureStore = () => {
  const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));
  return createStore(rootReducer, composedEnhancer);
};

export default configureStore;

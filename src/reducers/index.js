import { combineReducers } from 'redux';
import searchReducer from './reducer_search';
import imagesReducer from './reducer_images';
// Global state
const rootReducer = combineReducers({
  images: imagesReducer,
  search: searchReducer
});

export default rootReducer;

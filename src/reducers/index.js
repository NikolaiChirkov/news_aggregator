import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import regionReducer from './regionsReducer'; 

const rootReducer = combineReducers({
  posts: postsReducer,
  region: regionReducer
});

export default rootReducer;
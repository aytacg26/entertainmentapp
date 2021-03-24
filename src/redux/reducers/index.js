import { combineReducers } from 'redux';
import trendingReducer from './trendingReducer';

//we will add our reducers to combineReducers. This is our rootReducer
export default combineReducers({
  trending: trendingReducer,
});

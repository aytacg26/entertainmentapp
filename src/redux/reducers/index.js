import { combineReducers } from 'redux';
import trendingReducer from './trendingReducer';
import utilReducer from './utilReducer';

//we will add our reducers to combineReducers. This is our rootReducer
export default combineReducers({
  trending: trendingReducer,
  message: utilReducer,
});

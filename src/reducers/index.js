import { combineReducers } from 'redux';
import fifteenReducers from './fifteen-reducers';

export default combineReducers({
  board: fifteenReducers,
});

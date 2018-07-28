import { combineReducers } from 'redux'
import fifteenReducers from './fifteen-reducers'

export default combineReducers({
  state: fifteenReducers
})
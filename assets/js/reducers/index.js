import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todos from './todos';
import filter from './filter';

const rootReducer = combineReducers({
  todos,
  filter,
  routing: routerReducer
});

export default rootReducer;

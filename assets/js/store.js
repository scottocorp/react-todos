import { createStore, compose } from 'redux';
import persistState from 'redux-localstorage'

// import the root reducer
import rootReducer from './reducers/index';

import todos from './data/todos';
import filter from './data/filter';

// create an object for the default data
const defaultState = {
  todos,
  filter,
};

const enhancer = compose(
  persistState(),
)

const store = createStore(rootReducer, defaultState, enhancer);

export default store;

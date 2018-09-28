import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import session from './session/reducer';

const globalReducer = combineReducers({
  session
});
const logger = createLogger();
const store = createStore(
  globalReducer,
  applyMiddleware(thunkMiddleware, logger)
);

export default store;
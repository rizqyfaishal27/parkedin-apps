import { createStore, applyMiddleware, combinerReducers } from 'redux';
import sagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import LoginReducer from '../containers/LoginContainer/reducer.js';
import sagasConfig from './sagasConfig';

const loggerMiddleware = createLogger({
  stateTransformer: state => state.toJS(),
});

const createStoreWithMiddleware = applyMiddleware(
  sagaMiddleware(sagasConfig),
  loggerMiddleware
)(createStore);

export default (initialState) => (
  createStoreWithMiddleware(combinerReducers({
  	// loginContainer,
  }), initialState)
);

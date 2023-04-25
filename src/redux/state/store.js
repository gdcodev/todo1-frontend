/* eslint-disable no-undef */
import { applyMiddleware, legacy_createStore as createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import rootReducer from '../reducers/rootReducer';
import loggerMiddleware from './middleware/logger';
import monitorReducersEnhancer from './enhancers/monitorReducer';
import { api } from '../../service/api';

const authMiddleware = () => (next) => (action) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common.Authorization;
  }
  return next(action);
};

export default function configureStore(preloadedState) {
  const middlewares = [authMiddleware, loggerMiddleware, thunkMiddleware, reduxPackMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = compose(...enhancers);
  const store = createStore(rootReducer, preloadedState, composedEnhancers);
  return store;
}

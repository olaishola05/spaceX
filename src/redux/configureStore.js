import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducerRocker from './Rocket/rocketReducer';

const rootReducer = combineReducers({ rocket: reducerRocker });

const store = createStore(rootReducer, compose(applyMiddleware(logger, thunk)));

export default store;

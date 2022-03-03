import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducerRocker from './Rocket/rocketReducer';
import missionReducer from './missions/missions';

const rootReducer = combineReducers({
  rocket: reducerRocker,
  missions: missionReducer,
});

const store = createStore(rootReducer, compose(applyMiddleware(logger, thunk)));

export default store;

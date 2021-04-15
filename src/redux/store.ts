import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {rootReducer} from './reducers';

const logger = createLogger();
const middleWare = applyMiddleware(thunk, logger);
export const store = createStore(rootReducer, middleWare);

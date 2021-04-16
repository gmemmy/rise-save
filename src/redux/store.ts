import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './reducers';

const middleWare = applyMiddleware(thunk);
export const store = createStore(rootReducer, middleWare);

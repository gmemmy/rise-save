import {combineReducers} from 'redux';
import {userReducer} from './user';
import {planReducer} from './plans';
import {reducer as formReducer} from 'redux-form';

export const rootReducer = combineReducers({
  user: userReducer,
  form: formReducer,
  plan: planReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

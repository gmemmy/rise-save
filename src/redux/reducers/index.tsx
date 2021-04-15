import {combineReducers} from 'redux';
import {userReducer} from './user';
import {formReducer} from './form';

export const rootReducer = combineReducers({
  user: userReducer,
  form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

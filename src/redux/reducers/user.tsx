import {UserInfoActionTypes, UserInterface} from '../types';

const initialState: UserInterface = {
  email: '',
  isAuthenticated: false,
  loading: false,
  walletBalance: '0.00',
};

export function userReducer(
  state: UserInterface = initialState,
  action: UserInfoActionTypes,
): UserInterface {
  switch (action.type) {
    case 'SET_WALLET_BALANCE': {
      return {
        ...state,
        walletBalance: action.payload,
      };
    }
    case 'SET_USER_INFO': {
      return {
        ...state,
        email: action.payload.email,
        isAuthenticated: action.payload.isAuthenticated,
      };
    }
    default:
      return state;
  }
}

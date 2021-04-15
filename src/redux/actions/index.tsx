import {
  SET_WALLET_BALANCE,
  SetWalletBalance,
  SetUser,
  SET_USER_INFO,
} from '../types';

export function updateUserInfo(isAuthenticated: boolean, email: string) {
  const action: SetUser = {
    type: SET_USER_INFO,
    payload: {isAuthenticated, email},
  };
  return simulateHttpRequest(action);
}

export function updateWalletBalance(newBalance: string) {
  const action: SetWalletBalance = {
    type: SET_WALLET_BALANCE,
    payload: newBalance,
  };
  return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: any) {
  return (dispatch: any) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}

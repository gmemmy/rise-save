export interface UserInterface {
  email: string;
  walletBalance: string;
  loading: false;
  isAuthenticated: boolean;
}

export interface ValidationErrors {
  errors: {
    validation: {
      message: string;
      hasError: boolean;
    };
  };
}

export interface PlanInterface {
  plans: [
    {
      id: string;
      title: string;
      balance: string;
    },
  ];
}

export const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
export const SET_USER_INFO = 'SET_USER_INFO';
export const SET_WALLET_BALANCE = 'SET_WALLET_BALANCE';
export const SET_FORM_ERROR = 'SET_FORM_ERROR';
export const SET_PLAN_BALANCE = 'SET_PLAN_BALANCE';

export interface SetWalletBalance {
  type: typeof SET_WALLET_BALANCE;
  payload: string;
}

export interface SetUser {
  type: typeof SET_USER_INFO;
  payload: {
    email: string;
    isAuthenticated: boolean;
  };
}

export interface SetErrors {
  type: typeof SET_FORM_ERROR;
  payload: {
    message: string;
    hasError: boolean;
  };
}

export interface SetPLanBalance {
  type: typeof SET_PLAN_BALANCE;
  payload: {
    itemId: string;
    amount: string;
  };
}

export type UserInfoActionTypes = SetUser | SetWalletBalance;
export type PlanInfoActionTypes = SetPLanBalance;

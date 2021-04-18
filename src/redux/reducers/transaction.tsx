import {TransactionHistory, SetTransactionHistory} from '../types';

const initialState: TransactionHistory = {
  transactions: [],
};

export function transactionReducer(
  state: TransactionHistory = initialState,
  action: SetTransactionHistory,
): TransactionHistory {
  switch (action.type) {
    case 'SET_TRANSACTION_HISTORY': {
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    }
    default:
      return state;
  }
}

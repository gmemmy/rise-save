import {PlanInterface, PlanInfoActionTypes} from '../types';
import {createReducer} from '@reduxjs/toolkit';

const initialState: PlanInterface = {
  plans: [
    {
      id: '1',
      title: 'Santorini Funds',
      balance: '0.00',
    },
    {
      id: '2',
      title: 'School Fees',
      balance: '0.00',
    },
    {
      id: '3',
      title: 'Flexing',
      balance: '0.00',
    },
    {
      id: '4',
      title: 'I dunno',
      balance: '0.00',
    },
  ],
};

export const planReducer = createReducer(initialState, {
  SET_PLAN_BALANCE: (state: PlanInterface, action: PlanInfoActionTypes) => {
    const itemIndex = Number(action.payload.itemId) - 1;
    const prevBalance = state.plans[itemIndex].balance;
    const sumValues =
      parseFloat(action.payload.amount) + parseFloat(prevBalance);
    state.plans[itemIndex].balance = JSON.stringify(sumValues);
  },
});

import {PlanInterface, PlanInfoActionTypes} from '../types';

const initialState: PlanInterface = {
  plans: [
    {
      id: '01',
      title: 'Santorini Funds',
      balance: '0.00',
    },
  ],
};

export function planReducer(
  state: PlanInterface = initialState,
  action: PlanInfoActionTypes,
): PlanInterface {
  switch (action.type) {
    case 'SET_PLAN_BALANCE': {
      return {
        ...state,
        plans: state.plans.map(plan => {
          plan.id === action.payload.itemId
            ? {...plan, balance: action.payload.amount}
            : plan;
        }),
      };
    }
    default:
      return state;
  }
}

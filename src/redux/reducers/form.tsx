import {SetErrors, ValidationErrors} from '../types';

const initialState: ValidationErrors = {
  errors: {
    validation: {
      isError: true,
      message: '',
    },
  },
};

export function formReducer(
  state: ValidationErrors = initialState,
  action: SetErrors,
): any {
  switch (action.type) {
    case 'SET_FORM_ERROR': {
      return {
        ...state,
        errors: {
          validation: {
            isError: action.payload.isError,
            message: action.payload.message,
          },
        },
      };
    }
    default:
      return state;
  }
}

import {SetErrors, ValidationErrors} from '../types';

const initialState: ValidationErrors = {
  errors: {
    validation: {
      hasError: false,
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
            hasError: action.payload.hasError,
            message: action.payload.message,
          },
        },
      };
    }
    default:
      return state;
  }
}

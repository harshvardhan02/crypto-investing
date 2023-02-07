import { salesConstants } from '../constants';

const initialState = {
  data: [],
  value: {},
  isLoggedIn: false
}

export function sales(state = initialState, action) {
  switch (action.type) {
    case salesConstants.SUCCESS:
      return {
        ...state,
        name: 'DTP App',
        value: action.value
      }
    case salesConstants.ERROR:
      return {
        ...state,
        name: 'DTP API'
      }
    default:
      return state;
  }
}
import { appConstants } from '../constants';

const initialState = {
  name: 'DTP App',
  value: true,
  isLoggedIn: false
}

export function app(state = initialState, action) {
  switch (action.type) {
    case appConstants.SUCCESS:
      return {
        ...state,
        name: 'DTP App',
        value: action.value
      }
    case appConstants.ERROR:
      return {
        ...state,
        name: 'DTP API'
      }
    default:
      return state;
  }
}
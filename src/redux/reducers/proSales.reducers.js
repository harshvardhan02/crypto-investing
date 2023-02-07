import { proSalesConstants } from '../constants';

const initialState = {
  data: [],
  value: {},
  isLoggedIn: false
}

export function proSales(state = initialState, action) {
  switch (action.type) {
    case proSalesConstants.SUCCESS:
      return {
        ...state,
        name: 'DTP App',
        value: action.value
      }
    case proSalesConstants.ERROR:
      return {
        ...state,
        name: 'DTP API'
      }
    default:
      return state;
  }
}
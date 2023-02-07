import { combineReducers } from 'redux';

import { app } from './app.reducers';
import { sales } from './sales.reducers';
import { proSales } from './proSales.reducers';

const rootReducer = combineReducers({
  appReducer: app,
  saleReducer: sales,
  proSalesReducer: proSales
})

export default rootReducer;
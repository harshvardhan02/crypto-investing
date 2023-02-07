import { combineReducers } from 'redux';

import { app } from './app.reducers';

const rootReducer = combineReducers({
  appReducer: app,
})

export default rootReducer;
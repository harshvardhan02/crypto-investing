import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { logger } from 'redux-logger';

// Define Middleware
const middleware = [logger, thunk]

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// Create Store
export default configureStore(
  { reducer: rootReducer },
  composeEnhancers(applyMiddleware(...middleware))
)
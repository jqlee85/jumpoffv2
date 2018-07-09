import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from 'redux-logger';
import user from "./reducers/userReducer";
const env = process.env.NODE_ENV || 'development';
const middleware = [thunk];
const logger = createLogger();
if (env === 'development') middleware.push(logger);


const configureStore = preloadedState =>
  createStore(
    combineReducers({
      user
    }), 
    preloadedState, 
    applyMiddleware(...middleware)
  );

export default configureStore;

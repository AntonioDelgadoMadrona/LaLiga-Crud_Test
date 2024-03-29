// DEPENDENCIES
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { routerReducer, routerMiddleware } from "react-router-redux";

// REDUCERS
import userReducer from "./reducers/userReducer/userReducer";
import authReducer from "./reducers/authReducer/authReducer";
import apiStatusReducer from "./reducers/apiStatusReducer/apiStatusReducer";
import alertReducer from "./reducers/alertReducer/alertReducer";

// MIDDLEWARES
import loggedMiddleware from "./middlewares/loggedMiddleware";

export default function configureStore(initialState: any, browserHistory: any) {
  const middlewares = [
    thunk,
    loggedMiddleware,
    routerMiddleware(browserHistory),
  ];

  // In development, use the browser's Redux dev tools extension if installed
  const enhancers = [];
  const isDevelopment = process.env.NODE_ENV === "development";
  if (
    isDevelopment &&
    typeof window !== "undefined" &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__
  ) {
    enhancers.push((window as any).__REDUX_DEVTOOLS_EXTENSION__());
  }

  const rootReducer = combineReducers({
    userReducer,
    authReducer,
    apiStatusReducer,
    alertReducer,
    routing: routerReducer,
  });

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares), ...enhancers)
  );
}

// DEPENDENCIES
import React from "react";
import ReactDOM from "react-dom";

// REDUX
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";

// COMPONENTS
import App from "./components/App";

import reportWebVitals from "./reportWebVitals";

// CONFIGURE STORE
import { history } from './utils/history'
const store = configureStore({}, history);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
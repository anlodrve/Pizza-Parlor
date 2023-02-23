import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

// const pizzaTypes = (state = [], action) => {
// 	return state;
// }; // John thinks this is important for some reason
// He doesnt really know why

const userInformation = (state = [], action) => {
  return state;
};

const cart = (state = [], action) => {
  if (action.type === "SET_CART") {
    return action.payload;
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    // pizzaTypes,
    userInformation,
    cart,
  }),
  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);

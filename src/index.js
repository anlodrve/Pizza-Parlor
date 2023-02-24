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

//I do! its for when we do quanity 💯

const userInformation = (state = [], action) => {
  if (action.type === "SET_USER_INFORMATION") {
    return action.payload;
  }
  return state;
};

const cart = (state = [], action) => {
  if (action.type === "SET_CART") {
    return action.payload;
  } else if (action.type === "REMOVE_FROM_CART") {
    const index = state.indexOf(action.payload);
    const newState = state.splice(index, 1);
    return newState;
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    // pizzaTypes,
    cart,
    userInformation,
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

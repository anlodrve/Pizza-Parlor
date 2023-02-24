import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

// const pizzaTypes = (state = [], action) => {
//   return state;
// }; // John thinks this is important for some reason

const userInformation = (state = [], action) => {
  if (action.type === "SET_USER_INFORMATION") {
    return action.payload;
  }
  return state;
};

const cart = (state = { total: 0, pizzas: [] }, action) => {
  if (action.type === "ADD_TO_CART") {
    const newState = { ...state };
    newState.pizzas.push(action.payload);
    newState.total = newState.pizzas.reduce((totalCost, pizza) => {
      return (totalCost += Number(pizza.price));
    }, 0);
    return newState;
  } else if (action.type === "REMOVE_FROM_CART") {
    const newState = { ...state };
    // find the pizza by id and remove it
    const pizzaToRemove = newState.pizzas.find(
      (pizza) => pizza.id === action.payload.id
    );
    const indexToRemove = newState.pizzas.indexOf(pizzaToRemove);
    newState.pizzas.splice(indexToRemove, 1);

    newState.total = newState.pizzas.reduce((totalCost, pizza) => {
      return (totalCost += Number(pizza.price));
    }, 0);
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

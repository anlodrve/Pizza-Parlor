import React from "react";
import axios from "axios";
import "./App.css";

import { HashRouter as Router, Route, Link } from "react-router-dom";

import Form from "../Form/Form";
import PizzaList from "../PizzaList/PizzaList";
import Checkout from "../Checkout/Checkout.jsx";
import Admin from "../Admin/Admin.jsx";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  //fetch pizzas
  const fetchPizzas = () => {
    axios.get("api/pizza").then((response) => {
      console, log(response);
      dispatch({
        type: "SET_PIZZAS",
        payload: response.data,
      });
    });
  };

  //fetch on page load
  useEffect(() => {
    fetchPizzas();
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
            <li>
              <Link to="/admin">Checkout</Link>
            </li>
          </ul>
        </header>
        <Route exact path="/">
          <PizzaList />
        </Route>
        <Route exact path="/form">
          <Form />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <img src="images/pizza_photo.png" />
        <p>Pizza is great.</p>
      </div>
    </Router>
  );
}

export default App;

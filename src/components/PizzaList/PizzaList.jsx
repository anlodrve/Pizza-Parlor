import "./PizzaList.css";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";
import PizzaItem from "../PizzaItem/PizzaItem.jsx";

function PizzaList() {
  const history = useHistory();

  const [pizzasOnDom, setPizzasOnDom] = useState([]);

  //fetch pizzas form the database
  const fetchPizzas = () => {
    axios.get("api/pizza").then((response) => {
      console.log(response.data);
      setPizzasOnDom(response.data);
    });
  };

  //fetch pizzas on page load
  useEffect(() => {
    fetchPizzas();
  }, []);

  return (
    <div>
      <h1>Pizza</h1>
      <div>
        {pizzasOnDom.map((pizza) => (
          <PizzaItem key={pizza.id} pizza={pizza} />
        ))}
      </div>

      <button
        className="pizzaNextBtn"
        onClick={() => {
          history.push("/form");
        }}
      >
        Next
      </button>
    </div>
  );
}

export default PizzaList;

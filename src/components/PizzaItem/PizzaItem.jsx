import "./PizzaItem.css";
import { useState } from "react";
import { useDispatch } from "react-redux";

function PizzaItem({ pizza }) {
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();

  //function to toggle add btn
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  //function to handle adding pizza to cart
  const handleAddPizza = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: pizza.id,
        name: pizza.name,
        price: pizza.price,
      },
    });
  };

  //handle deleting pizza from cart
  //function to handle adding pizza to cart
  const handleRemovePizza = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        id: pizza.id,
      },
    });
  };

  return (
    <div>
      <h1>{pizza.name}</h1>
      <h1>{pizza.price}</h1>
      <p>{pizza.description}</p>
      <div onClick={handleClick}>
        {isClicked ? (
          <button onClick={handleRemovePizza}>Remove</button>
        ) : (
          <button onClick={handleAddPizza}>Add</button>
        )}
      </div>
    </div>
  );
}

export default PizzaItem;

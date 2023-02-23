import "./Form.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Form() {
  //object to be sent to database
  let [customerToAdd, setCustomerToAdd] = useState({
    name: "",
    street: "",
    city: "",
    zip: "",
    type: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  //function to send input to reducer and change page
  const handleSubmit = () => {
    console.log(customerToAdd);
    dispatch({
      type: "SET_USER_INFORMATION",
      payload: customerToAdd,
    });

    clearInputs();
    history.push(`/checkout`);
  };

  const clearInputs = () => {
    setCustomerToAdd({
      name: "",
      street: "",
      city: "",
      zip: "",
      type: "",
    });
  };

  return (
    <div>
      <form id="customer-info-form">
        <input
          value={customerToAdd.name}
          onChange={(evt) => {
            setCustomerToAdd({
              ...customerToAdd,
              name: evt.target.value,
            });
          }}
          type="text"
          placeholder="Name"
        ></input>
        <input
          value={customerToAdd.street}
          onChange={(evt) => {
            setCustomerToAdd({
              ...customerToAdd,
              street: evt.target.value,
            });
          }}
          type="text"
          placeholder="Street Address"
        ></input>
        <input
          value={customerToAdd.city}
          onChange={(evt) => {
            setCustomerToAdd({
              ...customerToAdd,
              city: evt.target.value,
            });
          }}
          type="text"
          placeholder="City"
        ></input>
        <input
          value={customerToAdd.zip}
          onChange={(evt) => {
            setCustomerToAdd({
              ...customerToAdd,
              zip: evt.target.value,
            });
          }}
          type="text"
          placeholder="Zip Code"
        ></input>
        <div id="radio-btns">
          <label>Pickup</label>
          <input
            value={customerToAdd.type}
            onChange={() => {
              setCustomerToAdd({
                ...customerToAdd,
                type: "Pickup",
              });
            }}
            type="radio"
          ></input>

          <label>Delivery</label>
          <input
            value={customerToAdd.type}
            onChange={() => {
              setCustomerToAdd({
                ...customerToAdd,
                type: "Delivery",
              });
            }}
            type="radio"
          ></input>
        </div>
        <button type="button" onClick={handleSubmit}>
          Next
        </button>
      </form>
    </div>
  );
}

export default Form;

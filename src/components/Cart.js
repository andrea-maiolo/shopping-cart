import React, { useState } from "react";
import Shop from "../Shop";

function Cart(props) {
  const [cart, setCart] = useState([]);
  const [cartVisibility, setCartVisibility] = useState(false);

  function handleCartVisibilityFunction() {
    setCartVisibility((prevState) => !prevState);
    console.log(cartVisibility);
  }

  return (
    <div>
      <button onClick={handleCartVisibilityFunction}>click to show cart</button>
    </div>
  );
  {
    cartVisibility && (
      <div>
        <p>image of cart</p>
        <p>checkout link to demo page</p>
      </div>
    );
  }
}

export default Cart;

import React from "react";

function Cart(props) {
  function handleClick() {
    console.log("i have been clicked");
    console.log(props.cart);
  }
  return (
    <button className="cartButton" onClick={handleClick}>
      <img
        className="cartImg"
        alt="Your cart"
        src={require(`../styles/shopping_cart.svg`).default}
      />
    </button>
  );
}

export default Cart;

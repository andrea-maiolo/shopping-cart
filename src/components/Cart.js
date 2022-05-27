import React from "react";

function Cart(props) {
  function handleClick() {
    console.log("i have been clicked");
    console.log(props.cart);
  }

  const [cartDisplay, setCartDisplay] = React.useState();

  React.useEffect(() => {
    if (props.cart.length === 0 || props.cart.length === null) {
      setCartDisplay("Your cart is empty");
    } else {
      setCartDisplay();
    }
    // let myA = props.cart.map((p) => console.log(p));
  }, [props.cart]);

  return (
    <div>
      <button className="cartButton" onClick={handleClick}>
        <img
          className="cartImg"
          alt="Your cart"
          src={require(`../styles/shopping_cart.svg`).default}
        />
      </button>
      <div className="cartVisible">
        <p>{cartDisplay}</p>
      </div>
    </div>
  );
}

export default Cart;

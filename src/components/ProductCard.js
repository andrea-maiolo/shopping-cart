import React from "react";

const ProductCard = function (props) {
  const [quantity, setQuantity] = React.useState(0);

  function handleSub() {
    if (quantity === 0) {
      return;
    }
    setQuantity((prevState) => prevState - 1);
  }

  function handlePlus() {
    setQuantity((prevState) => prevState + 1);
  }

  function addToCart(e) {
    console.log(e.target);
  }

  return (
    <div id={props.id} className="singleProduct">
      <img src={props.image} className="prodImages" />
      <p className="prodTitle">{props.title}</p>
      <p className="prodPrice">{props.price} €</p>
      <div className="prodQ">
        <button onClick={handleSub}>-</button>
        <p>{quantity}</p>
        <button onClick={handlePlus}>+</button>
      </div>
      <button onClick={addToCart}>ADD TO CART</button>
    </div>
  );
};

export default ProductCard;

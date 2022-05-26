import React from "react";

const ProductCard = function (props) {
  const [quantity, setQuantity] = React.useState(1);

  function handleSub() {
    if (quantity === 0) {
      return;
    }
    setQuantity((prevState) => prevState - 1);
  }

  function handlePlus() {
    setQuantity((prevState) => prevState + 1);
    console.log(props.cart);
  }
  console.log(props.cart);

  function addToCart(e) {
    const referenceDiv = Number(e.target.parentElement.id);
    const currentProd = props.allProd.filter((e) => {
      if (e.id === referenceDiv) {
        console.log(e);
        // console.log(e.price * quantity);
        props.setCart((prevCart) => prevCart.push(e.price));
      }
    });
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

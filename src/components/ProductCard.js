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
  }

  function addToCart(e) {
    const referenceDiv = Number(e.target.parentElement.id);
    const currentProd = props.allProd.filter((prod) =>
      prod.id === referenceDiv ? true : false
    );
    console.log(currentProd);
    //this is an array with an obj, i just want the ojb and place it in the cart
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

import React from "react";

function CartDom(props) {
  //if you get more of the same items you should merge them
  console.log(props);

  const [cartQuantity, setCartQuantity] = React.useState(props.quantity);

  function handleSub() {
    if (cartQuantity === 1) {
      return;
    }
    setCartQuantity((prevState) => prevState - 1);
    //this need to change the price
  }

  function handlePlus() {
    setCartQuantity((prevState) => prevState + 1);
    //this need to change the price
  }

  function removeFromCart(e) {
    // //this should remove the item from cart
    // const referenceItem = Number(e.target.parentElement.firstChild);
    // console.log()
    // let currentItem = props..filter((prod) =>
    //   prod.id === referenceItem ? true : false
    // );
    console.log("currentItem");
  }

  //   function addToCart(e) {
  //     const referenceDiv = Number(e.target.parentElement.id);
  //     let currentProd = props.allProd.filter((prod) =>
  //       prod.id === referenceDiv ? true : false
  //     );
  //     currentProd = currentProd[0];
  //     currentProd.quantity = quantity;
  //     props.setCart((prevCart) => {
  //       return [...prevCart, currentProd];
  //     });
  //   }

  return (
    <div className={props.id}>
      <p>{props.title}</p>
      <img src={props.image} alt={props.title} />
      <div className="cartQuantity">
        <button onClick={handleSub}>-</button>
        <p>{cartQuantity}</p>
        <button onClick={handlePlus}>+</button>
      </div>
      <button onClick={removeFromCart}>DELETE</button>
    </div>
  );
}

export default CartDom;

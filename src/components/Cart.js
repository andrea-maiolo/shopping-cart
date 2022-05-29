import React from "react";
import CartDom from "./CartDom";
import Header from "./Header";
import Footer from "./Footer";

function Cart(props) {
  console.log(props);

  function handleClick(e) {
    let cv = document.querySelector(".cartVisible");
    cv.classList.toggle("active");
    e.target.classList.toggle("active");
    let shopPage = document.querySelector(".shopPage");
    shopPage.classList.toggle("active");
    let homePage = document.querySelector(".homePage");
    shopPage.classList.toggle("active");
  }

  const [cartDisplay, setCartDisplay] = React.useState();

  React.useEffect(() => {
    if (
      props.cart === undefined ||
      props.cart.length === 0 ||
      props.cart.length === null
    ) {
      setCartDisplay("Your cart is empty");
    } else {
      const cartD = props.cart.map((p) => {
        return <CartDom key={p.id} {...p} />;
      });
      setCartDisplay(cartD);
    }
    // let myA = props.cart.map((p) => console.log(p));
  }, [props.cart]);

  return (
    <div>
      <Header />
      <div className="visibleCart">{cartDisplay}</div>
      <Footer />
    </div>
  );
}

export default Cart;

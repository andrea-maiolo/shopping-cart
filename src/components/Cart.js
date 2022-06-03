import React from "react";
import CartDom from "./CartDom";
import Header from "./Header";
import Footer from "./Footer";

function Cart() {
  const [cart, setCart] = React.useState([
    {
      id: 9,
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      price: 64,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    },
    {
      id: 11,
      image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      price: 109,
      title:
        "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    },
  ]);

  const productsInCart = cart.map((product) => {
    return (
      <CartDom
        key={product.id}
        id={product.id}
        image={product.image}
        price={product.price}
        title={product.title}
        cart={cart}
      />
    );
  });

  return (
    <div className="cartPage">
      <Header />
      <div className="productsInCart">{productsInCart}</div>
      <Footer />
    </div>
  );
}

export default Cart;

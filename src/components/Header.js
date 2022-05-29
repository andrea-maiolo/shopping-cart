import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  console.log(props.myProp);

  return (
    <header className="headerMain">
      <h1 className="shopTitle">SHOPPE</h1>
      <nav className="navBarTop">
        <Link to="/">Our Story</Link>
        <Link to="/shop">Products</Link>
        <Link to="/contacts">Contact Us</Link>
        <Link to="/cart" state={props.myProp}>
          <button className="cartButton">
            <img
              className="cartImg"
              alt="Your cart"
              src={require(`../styles/shopping_cart.svg`).default}
            />
          </button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;

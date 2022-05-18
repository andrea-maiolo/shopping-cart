import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="headerMain">
      <h1>SHOPPE</h1>
      <nav>
        <Link to="/">Our Story</Link>
        <Link to="/contacts">Contact Us</Link>
        <Link to="/shop">Products</Link>
      </nav>
    </header>
  );
}

export default Header;

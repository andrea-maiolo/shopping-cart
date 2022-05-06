import React from "react";
import { Link } from "react-router-dom";

function Contacts() {
  return (
    <div>
      <h1>hello from contacts</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/shop">Products</Link>
      </nav>
    </div>
  );
}

export default Contacts;

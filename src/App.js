import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>hello from app</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/shop">Products</Link>
      </nav>
    </div>
  );
}

export default App;

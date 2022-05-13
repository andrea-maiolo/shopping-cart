import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import ReactLoading from "react-loading";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics?sort=asce")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [0]);

  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    if (products.length > 0) {
      console.log("Ready!!");
      setLoadingPage((prevState) => !prevState);
    }
    console.log("almost ready");
  }, [products]);

  // const load = function Loading() {
  //   return (
  //     <div>
  //       <h2>Loading in ReactJs - GeeksforGeeks</h2>
  //       <ReactLoading type="balls" color="#0000FF" height={100} width={50} />
  //       <ReactLoading type="bars" color="#0000FF" height={100} width={50} />
  //       <ReactLoading type="bubbles" color="#0000FF" height={100} width={50} />
  //       <ReactLoading type="cubes" color="#0000FF" height={100} width={50} />
  //       <ReactLoading type="cylon" color="#0000FF" height={100} width={50} />
  //       <ReactLoading type="spin" color="#0000FF" height={100} width={50} />
  //       <ReactLoading type="spokes" color="#0000FF" height={100} width={50} />
  //       <ReactLoading
  //         type="spinningBubbles"
  //         color="#0000FF"
  //         height={100}
  //         width={50}
  //       />
  //     </div>
  //   );
  // };

  // const productsDom = products.map((product) => {
  //   return (
  //     <ProductCard
  //       key={product.id}
  //       id={product.id}
  //       description={product.description}
  //       image={product.image}
  //       price={product.price}
  //       title={product.title}
  //     />
  //   );
  // });

  return (
    <div>
      <h1>hello from shop</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/shop">Products</Link>
      </nav>
      {loadingPage && (
        <div>
          <h2>Loading in ReactJs - GeeksforGeeks</h2>
          <ReactLoading type="bars" color="#0000FF" height={100} width={50} />
        </div>
      )}
    </div>
  );
}

export default Shop;

import React, { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import ReactLoading from "react-loading";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
      setLoadingPage(false);
    }
  }, [products]);

  const productsDom = products.map((product) => {
    return (
      <ProductCard
        key={product.id}
        id={product.id}
        description={product.description}
        image={product.image}
        price={product.price}
        title={product.title}
      />
    );
  });

  //test to see if i can pass products as props
  // const syncCart = products.map((product) => {
  //   return <Cart key={product.id} product={product} />;
  // });

  return (
    <div className="shopPage">
      <Header />
      {loadingPage && (
        <div>
          <h2 data-testid="loadT">Loading products</h2>
          <ReactLoading type="bars" color="#0000FF" height={100} width={50} />
        </div>
      )}
      {!loadingPage && <div calssName="prodsDiv">{productsDom}</div>}
      <Footer />
    </div>
  );
}

export default Shop;

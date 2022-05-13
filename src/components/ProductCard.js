import React from "react";

const ProductCard = function (props) {
  return (
    <div className="singleProduct">
      <p>{props.title}</p>
    </div>
  );

  //   id={c.id}
  //   description={c.description}
  //   image={c.image}
  //   price={c.price}
  //   title={c.title}
};

export default ProductCard;

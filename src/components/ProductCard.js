import React from "react";

const ProductCard = function (props) {
  return (
    <div className="singleProduct">
      <p className="prodPrice">{props.price} €</p>
      <img src={props.image} className="prodImages" />
      <p className="prodTitle">{props.title}</p>
      <p className="prodDescription">{props.description}</p>
    </div>
  );

  //   id={c.id}
  //   description={c.description}
  //   image={c.image}
  //   price={c.price}
  //   title={c.title}
};

export default ProductCard;

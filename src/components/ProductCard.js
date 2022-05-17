import React from "react";

const ProductCard = function (props) {
  return (
    <div id={props.id} className="singleProduct">
      <p className="prodPrice">{props.price} €</p>
      <img src={props.image} className="prodImages" />
      <p className="prodTitle">{props.title}</p>
      <p className="prodDescription">{props.description}</p>
    </div>
  );
};

export default ProductCard;

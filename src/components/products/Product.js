import React from "react";
import "./product.css";

import StarIcon from "@material-ui/icons/Star";

const Product = ({ product, dispatch }) => {
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: product.id,
        title: product.data.title,
        image: product.data.image,
        price: product.data.price,
        rating: product.data.rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{product.data.title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{product.data.price}</strong>
        </p>
        <div className="product__rating">
          {Array(product.data.rating).fill().map((_, i) => (
            <p key={i}><StarIcon style={{ color: " #cd9042" }} /></p>
          ))}
        </div>
      </div>
      <img
        src={product.data.image}
        alt="the_lean_startup"
      />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;

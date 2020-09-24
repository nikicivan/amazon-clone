import React from "react";
import "./checkoutProduct.css";

import StarIcon from "@material-ui/icons/Star";

const CheckoutProduct = (
  { id, image, title, price, rating, dispatch, hideButton },
) => {
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="product_image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="checkoutProduct__rating">
          {Array(rating).fill().map((_, i) => (
            <span key={i}><StarIcon style={{ color: " #cd9042" }} /></span>
          ))}
        </p>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from basket</button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;

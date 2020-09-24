import React from "react";

import CheckoutProduct from "./checkout-product/CheckoutProduct";
import "./checkout.css";
import Subtotal from "./subtotal/Subtotal";

const Checkout = ({ basket, user, dispatch }) => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="checkout__ad"
        />
        <h3 className="checkout__welcome">Hello, {user?.email}</h3>
        <div>
          <h2 className="checkout__title">
            Your shopping Basket
          </h2>
          {basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              dispatch={dispatch}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;

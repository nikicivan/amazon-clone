import React, { useEffect, useState } from "react";
import Product from "../components/products/Product";
import "./home.css";

import { db } from "../firebase";

const Home = ({ dispatch }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (products) {
      db.collection("products").onSnapshot((snapshot) => {
        setProducts(snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        })));
      });
    } else {
      setProducts([]);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          //   src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="amazon_banner"
        />
        <div className="home__row">
          {products?.map((product) => (
            <Product
              product={product}
              key={product.id}
              dispatch={dispatch}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

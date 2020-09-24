import React, { useEffect, useState } from "react";
import "./orders.css";

import { db } from "../../firebase";
import Order from "../order/Order";

const Orders = ({ basket, user }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users").doc(user?.uid).collection("orders").orderBy(
        "created",
        "desc",
      ).onSnapshot((snapshot) => {
        setOrders(snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        })));
      });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div>
      <div className="orders">
        <h2>Your orders</h2>
        {orders?.map((order) => (
          <Order order={order} key={order.id} />
        ))}
      </div>
    </div>
  );
};

export default Orders;

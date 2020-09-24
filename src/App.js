import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./components/payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/orders/Orders";

const promise = loadStripe(
  "pk_test_51GwzH5LpbxAibtILYvbr2S2JQlWnOkN3WksaTzdRV8GymvXECrRWfErvRlxBbik9OU90UdFwB8xOBjI1kwvlkNsW009CIZ4kqX",
);

function App() {
  const [{ user, basket }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("the user is >>>", authUser);
      if (authUser) {
        // the user just login / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header user={user} basket={basket} />
            <Orders user={user} basket={basket} />
          </Route>
          <Route path="/checkout">
            <Header user={user} basket={basket} />
            <Checkout user={user} basket={basket} dispatch={dispatch} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header user={user} basket={basket} />
            <Elements stripe={promise}>
              <Payment user={user} basket={basket} dispatch={dispatch} />
            </Elements>
          </Route>
          <Route path="/">
            <Header user={user} basket={basket} />
            <Home dispatch={dispatch} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./login.css";

import { auth } from "../../firebase";

const Login = ({ authUser }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      }).catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon_logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__signinButton"
            type="submit"
            onClick={signin}
          >
            Sign in
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon FAKE CLONE Conditions of Use and
          Privacy Notice.
        </p>
        <button
          className="login__registerButton"
          type="submit"
          onClick={register}
        >
          Create Amazon Fake Account
        </button>
      </div>
    </div>
  );
};

export default Login;

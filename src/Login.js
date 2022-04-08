import React, { useState } from "react";
import logo from "./logo.png";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";


function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = e => {
    e.preventDefault();

    auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
}

const register = e => {
    e.preventDefault();

    auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // it successfully created a new user with email and password
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
}



  return (
    <div className="Login">
      <Link to="/">
        <img className="Login-Logo" src={logo} alt="Logo" />
      </Link>
      <div className="Login-Container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="Login-SignInButton" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Studio21.co's Condition of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className="Login-registerButton" onClick={register} >
          Create your Account
        </button>
      </div>
    </div>
  );
}

export default Login;
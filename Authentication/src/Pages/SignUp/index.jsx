import React, { useState } from "react";
import { app } from "../../config";
import "./signUP.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
const googleprovider = new GoogleAuthProvider();
const githubprovider = new GithubAuthProvider();
const auth = getAuth();

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("Success")
    );
  };

  const signinwithGoogle = () => {
    signInWithPopup(auth, googleprovider);
  };

  const signinwithGithub = () => {
    signInWithPopup(auth, githubprovider)
      .then((value) => alert("Sign in with Github Successfully"))
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="sign-up-page">
      <div className="form-container">
        <label>Email :</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Enter your mail here"
        />
        <br />
        <label>Password :</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Enter your password here"
        />
        <br />
        <button onClick={signinwithGoogle}> sign with google</button>
        <br />
        <button onClick={signinwithGithub}>Sign with github</button>
        <br />
        <button onClick={createUser}>Signup</button>
      </div>
    </div>
  );
};

export default SignUp;

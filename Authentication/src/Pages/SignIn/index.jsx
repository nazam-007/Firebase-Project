import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../config";
import "./SignIN.css";
import { React, useState } from "react";
const auth = getAuth();

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => alert("Login Succcessfull"))
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="sign-in-page">
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
        <button onClick={SignInUser}>SignIn</button>
      </div>
    </div>
  );
};

export default SignInPage;

import "./App.css";
import SignUp from "./Pages/SignUp";
import SignInPage from "./Pages/SignIn";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./config";
const auth = getAuth();

function App() {
  const SingUpUser = () => {
    createUserWithEmailAndPassword(auth, "hasmi@gmail.com", "123456").then(
      (value) => console.log(value)
    );
  };

  return (
    <>
      <div>
        <h2>Sign UP PAGE</h2>
        <SignUp/>
        <h2>Sign IN PAGE</h2>
        <SignInPage/>
        <h1>Firebase-Authentication</h1>
        <button onClick={SingUpUser}>create User</button>
      </div>
    </>
  );
}

export default App;

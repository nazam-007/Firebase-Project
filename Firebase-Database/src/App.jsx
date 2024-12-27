
import { getDatabase, ref, set } from "firebase/database";
import { app } from "./config";
import "./App.css";

const db = getDatabase(app);

function App() {
  const writeToDatabase = () => {
    const userId = "user1"; // Example unique identifier
    const userRef = ref(db, `users/${userId}`); // Path in the database

    // Data to be written
    const userData = {
      name: "Shan",
      email: "Shan@example.com",
      age: 12,
    };

    set(userRef, userData)
      .then(() => {
        alert("Data written successfully!");
      })
      .catch((error) => {
        alert("Error writing data: " + error);
      });
  };

  return (
    <div>
      <h1>firebase database</h1>
      <button onClick={writeToDatabase}>Write to Firebase</button>
    </div>
  );
}

export default App;

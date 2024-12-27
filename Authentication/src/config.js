import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBRDHPG9Unj6q5q-m1AxpLtPYx4BxKewFc",
    authDomain: "fir-database-95990.firebaseapp.com",
    projectId: "fir-database-95990",
    storageBucket: "fir-database-95990.firebasestorage.app",
    messagingSenderId: "662749067922",
    appId: "1:662749067922:web:2d75a1326d504a6fbac44b",
    databaseURL:"https://fir-database-95990-default-rtdb.firebaseio.com"
  };

  export const app = initializeApp(firebaseConfig);
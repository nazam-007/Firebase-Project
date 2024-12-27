import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";


const firebaseConfig = {
    apiKey: "AIzaSyDJ2zw1i_M-Iual10cH4eUg_6aVok_1Otg",
    authDomain: "push-notifications-968ae.firebaseapp.com",
    projectId: "push-notifications-968ae",
    storageBucket: "push-notifications-968ae.firebasestorage.app",
    messagingSenderId: "752312564044",
    appId: "1:752312564044:web:f57fc6ef315f9ad88d77e9"
  };

export  const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAQRcOCkmclLLPvpkyMIvVyWyBriCbR04",
  authDomain: "assignment-relu.firebaseapp.com",
  projectId: "assignment-relu",
  storageBucket: "assignment-relu.appspot.com",
  messagingSenderId: "695810683901",
  appId: "1:695810683901:web:b95859109aa70b5a899f94",
  measurementId: "G-BEFZECZ989",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };

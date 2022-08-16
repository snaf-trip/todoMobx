import React from "react";
import App from "./App";
import "./index.scss"
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import firebase from "firebase/app";

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyB-jU7w2ftiXrOMQK5s4llmAjbjcalH5TY",
  authDomain: "todo-6666.firebaseapp.com",
  projectId: "todo-6666",
  storageBucket: "todo-6666.appspot.com",
  messagingSenderId: "148993331461",
  appId: "1:148993331461:web:7578dba38a95eb160aa76c",
  measurementId: "G-72CWS08CEW"
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

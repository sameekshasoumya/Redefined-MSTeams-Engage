import firebase from "firebase/app";
import "firebase/auth";
require("dotenv").config();

const app = firebase.initializeApp({
  apiKey: "AIzaSyBPq_AIJIrIwu53-jpKRM4TaGeasVCe8oY",
  authDomain: "redefteams-dev.firebaseapp.com",
  projectId: "redefteams-dev",
  storageBucket: "redefteams-dev.appspot.com",
  messagingSenderId: "272418608518",
  appId: "1:272418608518:web:3c26ac2cb21b4588060807",
});

export const auth = app.auth();
export default app;
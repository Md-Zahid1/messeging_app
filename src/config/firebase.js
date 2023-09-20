// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOjuS8DHRCW1dFzli6NF8Selm28p2o_EY",
  authDomain: "my-chating-app-4ff74.firebaseapp.com",
  databaseURL: "https://my-chating-app-4ff74-default-rtdb.firebaseio.com",
  projectId: "my-chating-app-4ff74",
  storageBucket: "my-chating-app-4ff74.appspot.com",
  messagingSenderId: "836687245167",
  appId: "1:836687245167:web:d7bf9610788bd30083c29a",
  measurementId: "G-RTS547650E"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);


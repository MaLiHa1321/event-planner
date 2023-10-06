// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpLJkV4xzOWP3hbfSU6208Z-KCPxn2tSM",
  authDomain: "event-planner-3931c.firebaseapp.com",
  projectId: "event-planner-3931c",
  storageBucket: "event-planner-3931c.appspot.com",
  messagingSenderId: "10433103062",
  appId: "1:10433103062:web:10c3a9382b149e1df4f577"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
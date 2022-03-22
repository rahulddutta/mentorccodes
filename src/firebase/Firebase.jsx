import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyBPQB-qDuYviqJf74p7CbrEAfDxhGlf_DY",
  authDomain: "mentor-codes.firebaseapp.com",
  projectId: "mentor-codes",
  storageBucket: "mentor-codes.appspot.com",
  messagingSenderId: "714645639749",
  appId: "1:714645639749:web:e988f4f9e5762b6bbd492c",
  measurementId: "G-GGDQPVESBY"
};

firebase.initializeApp(firebaseConfig)

export {firebase} 
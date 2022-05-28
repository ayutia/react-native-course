// Import the functions you need from the SDKs you need
import { firestore } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAcEsP1E1wVrFifJG8z3OFTgJQtCCDNg-M",
  authDomain: "coll-prueba.firebaseapp.com",
  projectId: "coll-prueba",
  storageBucket: "coll-prueba.appspot.com",
  messagingSenderId: "251130598381",
  appId: "1:251130598381:web:de58861fc7e5be9e694de4",
  measurementId: "G-WBE7GDXHXQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
export default {
    firebase,
    db
}
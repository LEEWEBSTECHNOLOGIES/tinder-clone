import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyB-ZWhPpqkffvnmRKVdZNO6NcPctZGIg5g",
  authDomain: "tinder-clone-98351.firebaseapp.com",
  projectId: "tinder-clone-98351",
  storageBucket: "tinder-clone-98351.appspot.com",
  messagingSenderId: "862702839132",
  appId: "1:862702839132:web:1c4771e17841a3022bcd99",
  measurementId: "G-C7YEKYGGW4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;


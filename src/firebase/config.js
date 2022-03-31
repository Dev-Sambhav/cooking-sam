import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1LSTmkEAXmqOeqp-AHDG0pJktGlO86UY",
  authDomain: "cooking-sam-site.firebaseapp.com",
  projectId: "cooking-sam-site",
  storageBucket: "cooking-sam-site.appspot.com",
  messagingSenderId: "688426405693",
  appId: "1:688426405693:web:83a851346dfb9a415b7f54",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };

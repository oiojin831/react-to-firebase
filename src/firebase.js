import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChMjJ8nQZetrV9fTVDZ8VIUgqV8-J3NdU",
  authDomain: "reactfire-fireship.firebaseapp.com",
  projectId: "reactfire-fireship",
  storageBucket: "reactfire-fireship.appspot.com",
  messagingSenderId: "449210690402",
  appId: "1:449210690402:web:b4afd62cf951a4d655da3b",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firestore = firebase.firestore();

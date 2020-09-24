import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCC5NrOiwanbTUIRVEbC86Bv-gsjKWhMmI",
  authDomain: "clone-c9dd8.firebaseapp.com",
  databaseURL: "https://clone-c9dd8.firebaseio.com",
  projectId: "clone-c9dd8",
  storageBucket: "clone-c9dd8.appspot.com",
  messagingSenderId: "251891623908",
  appId: "1:251891623908:web:1463f47ec85e7039b049f1",
  measurementId: "G-EZ74BG5W6X",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

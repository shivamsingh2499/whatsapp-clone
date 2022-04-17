import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
  apiKey: "AIzaSyDHPc2xEQDV5zyQODMCo3ttEf9PYL8zopI",
  authDomain: "whats-app-clone-b6466.firebaseapp.com",
  projectId: "whats-app-clone-b6466",
  storageBucket: "whats-app-clone-b6466.appspot.com",
  messagingSenderId: "216665233102",
  appId: "1:216665233102:web:2fbfa627da61e84069229f",
  measurementId: "G-JF1SLXXFRJ",
};
//  export var fire = firebase.initializeApp(firebaseConfig);

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;

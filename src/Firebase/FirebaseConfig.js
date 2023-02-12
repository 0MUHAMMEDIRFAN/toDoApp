import firebase from "firebase/compat/app"
// import "firebase/firebase"

const firebaseConfig = {
    apiKey: "AIzaSyC1r4vVMugt5k38tZh_jz5ZB0nEQUZFKQo",
    authDomain: "todoapp-4cb10.firebaseapp.com",
    projectId: "todoapp-4cb10",
    storageBucket: "todoapp-4cb10.appspot.com",
    messagingSenderId: "613023724005",
    appId: "1:613023724005:web:dd72cee118cbfb54a37f0c",
    measurementId: "G-T7RWR4GQ1E"
  };

  export const Firebase = firebase.initializeApp(firebaseConfig);
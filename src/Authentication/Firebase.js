import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDboEvsHLDXJWF6hIHGwRNNNJGcQX-dDP4",
    authDomain: "chocopedia-c5a93.firebaseapp.com",
    databaseURL: "https://chocopedia-c5a93.firebaseio.com",
    projectId: "chocopedia-c5a93",
    storageBucket: "chocopedia-c5a93.appspot.com",
    messagingSenderId: "498638704607",
    appId: "1:498638704607:web:895b993086e72094"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;
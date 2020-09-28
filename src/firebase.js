import  firebase from "firebase";

  const firebaseapp = firebase.initializeApp({
      apiKey: "AIzaSyBeEqJZ7NLLnb4ld3fZpcqHc1PJ8j9VBhU",
      authDomain: "talk-jamaica.firebaseapp.com",
      databaseURL: "https://talk-jamaica.firebaseio.com",
      projectId: "talk-jamaica",
      storageBucket: "talk-jamaica.appspot.com",
      messagingSenderId: "995741492427",
      appId: "1:995741492427:web:a0d31e1de20f08e2ed674e",
      measurementId: "G-VR0NFQ5371"
  })

  export default firebaseapp;


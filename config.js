import firebase from 'firebase'
require('@firebase/firestore')


var firebaseConfig = {
  apiKey: "AIzaSyCZFlLnAFTq_p8aLUJurW6gXBYperxPHqo",
  authDomain: "barter-app123.firebaseapp.com",
  databaseURL: "https://barter-app123-default-rtdb.firebaseio.com",
  projectId: "barter-app123",
  storageBucket: "barter-app123.appspot.com",
  messagingSenderId: "1080576115056",
  appId: "1:1080576115056:web:c5b80294e92e40af6c8fb5"
};

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase.firestore();

  
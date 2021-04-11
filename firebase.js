import * as firebase from "firebase";

import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCu47tYS9ib_sDn5GiDzynxM5ie-ocsbwo",
    authDomain: "footyfix-a895e.firebaseapp.com",
    projectId: "footyfix-a895e",
    storageBucket: "footyfix-a895e.appspot.com",
    messagingSenderId: "295267838479",
    appId: "1:295267838479:web:176b92ae74f376c400117a"
  };
  
  let app;

  //If APP hasn't been initialized  update app variable to firebase instant
  if ( firebase.apps.length === 0){

    app = firebase.initializeApp(firebaseConfig);
  }

  //else us the firebase app which has been initialized so you dont have to keep initializing app uneccessarily
  else{
      app = firebase.app();
  }

  const db = app.firestore();    // Setting up database access variable
  const auth = firebase.auth();  // Setting up database Authentication variable

export {db, auth}; // gives aceess to Firebase Varialbles
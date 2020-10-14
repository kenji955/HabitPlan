import firebase from "firebase/app";
// 認証周りやDB周りで必要なためimportしておく
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBUSUAknhe3IUR0uR0odWwSC5hfAmMgokk",
    authDomain: "habit-plan.firebaseapp.com",
    databaseURL: "https://habit-plan.firebaseio.com",
    projectId: "habit-plan",
    storageBucket: "habit-plan.appspot.com",
    messagingSenderId: "389810166808",
    appId: "1:389810166808:web:0f225badb3dea063fef76d",
    measurementId: "G-00XKHK2GY2",
};

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

export { firebase };



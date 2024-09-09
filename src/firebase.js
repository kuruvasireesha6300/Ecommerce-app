

import firebase from "firebase/compat/app"

import "firebase/compat/firestore"

import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAgd4XynxdZbGySFoAffrCCkYGaEBV_UwM",
  authDomain: "shopper-app-fd175.firebaseapp.com",
  projectId: "shopper-app-fd175",
  storageBucket: "shopper-app-fd175.appspot.com",
  messagingSenderId: "566194648106",
  appId: "1:566194648106:web:3af782c9de9a34a331bf53"
};

// To connect to Firebase Appn
const app = firebase.initializeApp(firebaseConfig)

// To connect to firestore database
export const myDatabase = firebase.firestore()


// To connec to Authuntication(Google Authentication)

// getAuth() --> This method will helps our react application to connect with the authentication which is inside the firebase
// GoogleAuthProvider --> This is a class that will help our react apllication to connect with Google Authentication
export const auth = getAuth(app) //auth --> Athentication system
export const provider = new GoogleAuthProvider() //provider --> Google Authentication



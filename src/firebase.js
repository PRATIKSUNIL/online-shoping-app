import firebase from "firebase"
import 'firebase/firestore'
import "firebase/auth"

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDYojka1qXtRj49SOrllyf3y0aHWxcywOI",
    authDomain: "login-9cda0.firebaseapp.com",
    projectId: "login-9cda0",
    storageBucket: "login-9cda0.appspot.com",
    messagingSenderId: "412372928873",
    appId: "1:412372928873:web:c7816a0b9d532db13e55f8"
  
})
var db = firebaseApp.firestore()
export const auth = firebaseApp.auth()
export {db};

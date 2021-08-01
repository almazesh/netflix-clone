import { jsxEmptyExpression } from "@babel/types";
import firebase from "firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyDxuhbibIi6UGQMvQWxuuw_-1Rknu2gaww",
  authDomain: "netflix-clone-a939d.firebaseapp.com",
  projectId: "netflix-clone-a939d",
  storageBucket: "netflix-clone-a939d.appspot.com",
  messagingSenderId: "801139902950",
  appId: "1:801139902950:web:b20860f2825d2cfb4dae27",
  measurementId: "G-HJNJB2HVY2"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  const auth = firebase.auth();

 

  export {auth } 
  export default db ;
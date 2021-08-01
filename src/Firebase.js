import { jsxEmptyExpression } from "@babel/types";
import firebase from "firebase";

export const firebaseConfig = {
    apiKey: "AIzaSyCZ9k55Die14g68-hm2hb8BNBEJ0wt8rQE",
    authDomain: "netflix-almaz-app.firebaseapp.com",
    projectId: "netflix-almaz-app",
    storageBucket: "netflix-almaz-app.appspot.com",
    messagingSenderId: "370942612969",
    appId: "1:370942612969:web:1fb478f876447e8789a778"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  const auth = firebase.auth();

  export {auth} 
  export default db;
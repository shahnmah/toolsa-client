// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0_NbkRPMs-ElBRWw7xXTA0-nJTfOcY18",
  authDomain: "toolsa-d0a43.firebaseapp.com",
  projectId: "toolsa-d0a43",
  storageBucket: "toolsa-d0a43.appspot.com",
  messagingSenderId: "473036847905",
  appId: "1:473036847905:web:30fdaa94b4d4b41609dc60"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;
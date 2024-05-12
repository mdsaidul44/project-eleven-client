// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALOlVfoDavM8aBXsFYhL1wbKWj_595UJE",
  authDomain: "assignment-eleven-3f067.firebaseapp.com",
  projectId: "assignment-eleven-3f067",
  storageBucket: "assignment-eleven-3f067.appspot.com",
  messagingSenderId: "746719715151",
  appId: "1:746719715151:web:c419cc3aa94bcdfe76af3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
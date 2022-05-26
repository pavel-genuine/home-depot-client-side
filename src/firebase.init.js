// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0VPnSNwh1W0-R-mlicwU5TbcwUanvEs8",
  authDomain: "full-stack-12.firebaseapp.com",
  projectId: "full-stack-12",
  storageBucket: "full-stack-12.appspot.com",
  messagingSenderId: "1006416823536",
  appId: "1:1006416823536:web:333d9f328e0baa61466e35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
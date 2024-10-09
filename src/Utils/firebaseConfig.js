// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4K6B1W6HXgRbCLJi-AhBvzgcPVVJZbmY",
  authDomain: "edutech-65d64.firebaseapp.com",
  projectId: "edutech-65d64",
  storageBucket: "edutech-65d64.appspot.com",
  messagingSenderId: "530121447207",
  appId: "1:530121447207:web:b544d84b9d56400debfb02",
  measurementId: "G-2LTD48L0K5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export { app, analytics, auth, googleProvider, signInWithPopup, signOut};
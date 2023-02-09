// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS5QcgpJBrkgP4Yx4BStXCDcuGjPm1TPc",
  authDomain: "audio-book-club-1d866.firebaseapp.com",
  projectId: "audio-book-club-1d866",
  storageBucket: "audio-book-club-1d866.appspot.com",
  messagingSenderId: "336015963357",
  appId: "1:336015963357:web:aed4416acaacf1d1129734",
  measurementId: "G-M8MGVLGVF4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
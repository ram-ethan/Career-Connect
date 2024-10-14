// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA1AxMN5VbH19iOrtdryoKgB1DtX88ZxkA",
    authDomain: "jobfinder-b2202.firebaseapp.com",
    projectId: "jobfinder-b2202",
    storageBucket: "jobfinder-b2202.appspot.com",
    messagingSenderId: "359818274652",
    appId: "1:359818274652:web:9e7b5b2809f926b1918399",
    measurementId: "G-9SWTWDC41T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db };
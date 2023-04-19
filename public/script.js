// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpPNE-6JM15maCNfYUjtXGtqNMPKd7BQk",
  authDomain: "gymon-d184b.firebaseapp.com",
  projectId: "gymon-d184b",
  storageBucket: "gymon-d184b.appspot.com",
  messagingSenderId: "585381323682",
  appId: "1:585381323682:web:a031f3c3135be7c023c8fb",
  measurementId: "G-W65MM9Y57M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

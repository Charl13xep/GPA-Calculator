// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"
import{getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
// Your web app's Firebase configuration



const firebaseConfig = {
    apiKey: "AIzaSyD1JMW5BK_DHR_Hi2iLZsa6Xt0dmnKZ9TM",
    authDomain: "gpa-calculator-60283.firebaseapp.com",
    projectId: "gpa-calculator-60283",
    storageBucket: "gpa-calculator-60283.appspot.com",
    messagingSenderId: "702197268696",
    appId: "1:702197268696:web:92dd4564f5b05398b857ad",
    measurementId: "G-C5N9RZF3YE"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
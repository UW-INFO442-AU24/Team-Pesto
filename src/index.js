// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClNd_YMV80Wxh25_d-wOUPi_uPAtPNvOs",
  authDomain: "info-442---team-pesto.firebaseapp.com",
  projectId: "info-442---team-pesto",
  storageBucket: "info-442---team-pesto.appspot.com",
  messagingSenderId: "1051959408243",
  appId: "1:1051959408243:web:a85f687aba21b08f7d9c06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
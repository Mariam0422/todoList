// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3yJ5TP2AEmS_y7fecScDDb5A-iPYrwcw",
  authDomain: "todolist-a9916.firebaseapp.com",
  projectId: "todolist-a9916",
  storageBucket: "todolist-a9916.appspot.com",
  messagingSenderId: "682604281534",
  appId: "1:682604281534:web:c03f8b9daf05ec8fc368ef",
  measurementId: "G-KJRWF8YWES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
    app, auth
}

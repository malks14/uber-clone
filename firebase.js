import {GoogleAuthProvider, getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAYFoq_ciJBLmKoS0u3Xe3JOHLEZw8fKo4",
  authDomain: "uber-app-6ef68.firebaseapp.com",
  projectId: "uber-app-6ef68",
  storageBucket: "uber-app-6ef68.appspot.com",
  messagingSenderId: "654221254537",
  appId: "1:654221254537:web:018a5faddac589e8d50b58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export {app, provider, auth}
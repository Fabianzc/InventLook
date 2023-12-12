import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBwnWl-zdaSWwaQUaowzVIX4PC7HOrTTy8",
  authDomain: "inventlook.firebaseapp.com",
  projectId: "inventlook",
  storageBucket: "inventlook.appspot.com",
  messagingSenderId: "815931065443",
  appId: "1:815931065443:web:e742e2136fbbc448ac6456"
};

export const initFirebase = initializeApp(firebaseConfig);
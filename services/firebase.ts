import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, serverTimestamp } from "firebase/firestore";

// --- STEP 1: Firebase Project Configuration ---
// This configuration is now active and connects to your project.
const firebaseConfig = {
  apiKey: "AIzaSyCQwslRai5qHWuIie0gFQs5ygx-o2lVWMA",
  authDomain: "myportfoliowebsite-2410d.firebaseapp.com",
  projectId: "myportfoliowebsite-2410d",
  storageBucket: "myportfoliowebsite-2410d.firebasestorage.app",
  messagingSenderId: "681329054825",
  appId: "1:681329054825:web:83db414e5065b6ed98bef8"
};

// --- STEP 2: Set up Firestore Security Rules ---
// Go to your Firebase project's Firestore rules editor using this direct link:
// https://console.firebase.google.com/project/myportfoliowebsite-2410d/firestore/rules
//
// For the contact form AND admin panel to work, you must allow reads and writes.
// Copy and paste the following rules into the editor and click "Publish".
//
// Development Rules (ALLOWS ANYONE to read/write):
/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{documentId} {
      // Allow anyone to create (write) and read contact messages.
      // This is necessary for the contact form and admin panel to function.
      // WARNING: For a production app, you MUST secure these rules,
      // for example, by only allowing authenticated admins to read.
      allow read, write: if true;
    }
  }
}
*/

let app;
let db: any; // Initialize db

try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  console.log("Firebase initialized successfully. Contact form is active.");
} catch (error) {
  console.error("Firebase initialization error:", error);
  // db remains null if initialization fails
  db = null;
}

export { db, collection, addDoc, getDocs, query, orderBy, serverTimestamp };
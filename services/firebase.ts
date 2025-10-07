import { initializeApp, FirebaseApp } from "firebase/app";
import { 
  initializeFirestore, 
  collection, 
  getDocs, 
  query, 
  orderBy, 
  addDoc, 
  serverTimestamp, 
  doc, 
  deleteDoc, 
  updateDoc,
  enableIndexedDbPersistence,
  Firestore
} from "firebase/firestore";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut,
  Auth
} from "firebase/auth";

// This configuration must be the same as the one in your portfolio project
// to connect to the same database.
const firebaseConfig = {
  apiKey: "AIzaSyCQwslRai5qHWuIie0gFQs5ygx-o2lVWMA",
  authDomain: "myportfoliowebsite-2410d.firebaseapp.com",
  projectId: "myportfoliowebsite-2410d",
  storageBucket: "myportfoliowebsite-2410d.firebasestorage.app",
  messagingSenderId: "681329054825",
  appId: "1:681329054825:web:83db414e5065b6ed98bef8"
};

// Initialize Firebase
let app: FirebaseApp;
let db: Firestore;
let auth: Auth;

try {
  app = initializeApp(firebaseConfig);
  
  // Use `initializeFirestore` with `experimentalForceLongPolling: true` to prevent RPC timeout errors.
  // This is a reliable workaround for network environments that interfere with WebSockets.
  db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
  });

  // Enable offline persistence to make the app more resilient to network issues.
  enableIndexedDbPersistence(db).catch((err) => {
    if (err.code === 'failed-precondition') {
      console.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.');
    } else if (err.code === 'unimplemented') {
      console.warn('The current browser does not support all of the features required to enable persistence.');
    }
  });

  auth = getAuth(app);
  console.log("Firebase initialized successfully for Admin Panel.");
} catch (error) {
  console.error("Firebase initialization error:", error);
  db = null!; // Ensure db is null if initialization fails
  auth = null!;
}

export { 
    db, 
    auth, 
    collection, 
    getDocs, 
    query, 
    orderBy, 
    addDoc, 
    serverTimestamp, 
    doc, 
    deleteDoc, 
    updateDoc, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut 
};
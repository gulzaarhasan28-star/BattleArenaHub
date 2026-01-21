// firebase-config.js
// ✅ Firebase v10 – FINAL & STABLE

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/* 🔥 YOUR REAL FIREBASE CONFIG */
const firebaseConfig = {
  apiKey: "AIzaSyDyXFlrTwnkUGFm9FPTw6lv6es7Uu5YhU4",
  authDomain: "battlearenahub-e8377.firebaseapp.com",
  projectId: "battlearenahub-e8377",
  storageBucket: "battlearenahub-e8377.firebasestorage.app",
  messagingSenderId: "183863662072",
  appId: "1:183863662072:web:e06705f1d7415cc3ceb20d"
};

/* 🚀 INIT FIREBASE */
const app = initializeApp(firebaseConfig);

/* 🔐 SERVICES */
export const auth = getAuth(app);
export const db   = getFirestore(app);

console.log("✅ Firebase connected successfully");

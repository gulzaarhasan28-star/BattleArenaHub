// BattleArenaHub Firebase Configuration
// Aapke project ID: battlearenahub-e8377
// Project Number: 183863662072

const firebaseConfig = {
  apiKey: "AIzaSyDyXFlrTwnkUGFm9FPTw6lv6es7Uu5YhU4",
  authDomain: "battlearenahub-e8377.firebaseapp.com",
  projectId: "battlearenahub-e8377",
  storageBucket: "battlearenahub-e8377.firebasestorage.app",
  messagingSenderId: "183863662072",
  appId: "1:183863662072:web:eee48f7e57fece8eceb20d"
};

// Firebase 9 (Modular) imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-storage.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export for use in other files
export { auth, db, storage };

console.log("🔥 BattleArenaHub Firebase Initialized!");
console.log("Project ID: battlearenahub-e8377");

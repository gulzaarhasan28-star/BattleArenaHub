// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDyXFlrTawKUGFm9FPTw61veS7UuSYHu4",
  authDomain: "battlearenahub-e8377.firebaseapp.com",
  projectId: "battlearenahub-e8377",
  storageBucket: "battlearenahub-e8377.appspot.com",
  messagingSenderId: "18383662072",
  appId: "1:18383662072:web:ee4f7fe57fce8cecb20d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

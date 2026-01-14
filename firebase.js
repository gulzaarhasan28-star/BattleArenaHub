// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup 
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

// 🔴 अपनी Firebase config ही रहने दो
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "battlearenahub-e8377.firebaseapp.com",
  projectId: "battlearenahub-e8377",
  storageBucket: "battlearenahub-e8377.appspot.com",
  messagingSenderId: "183836362072",
  appId: "1:183836362072:web:e06705f1d7415cc3ceb20d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ✅ EXPORT FUNCTION
export async function login() {
  try {
    await signInWithPopup(auth, provider);
    alert("✅ Login Successful");
    // next page later
  } catch (e) {
    alert(e.message);
  }
}
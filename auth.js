// auth.js
import { auth, db } from "./firebase-config.js";

import {
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const provider = new GoogleAuthProvider();

/* 🔥 IMPORTANT */
window.loginWithGoogle = async function () {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    console.log("✅ LOGIN SUCCESS:", user.email);

    const ref = doc(db, "users", user.uid);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      await setDoc(ref, {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        photo: user.photoURL,
        coins: 0,
        weeklyCoins: 0,
        createdAt: serverTimestamp()
      });

      location.href = "profile.html";
    } else {
      location.href = "dashboard.html";
    }
  } catch (e) {
    alert("Login failed: " + e.message);
    console.error(e);
  }
};

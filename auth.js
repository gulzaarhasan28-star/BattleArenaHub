import { auth, db } from "./firebase-config.js";

import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  doc,
  getDoc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const provider = new GoogleAuthProvider();

/* 🔥 IMPORTANT: window ke andar function attach */
window.loginWithGoogle = async function () {
  try {
    console.log("Google login clicked");

    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    console.log("Logged in:", user.email);

    const userRef = doc(db, "users", user.uid);
    const snap = await getDoc(userRef);

    if (!snap.exists()) {
      await setDoc(userRef, {
        email: user.email,
        name: user.displayName,
        photoURL: user.photoURL,
        coins: 0,
        createdAt: new Date()
      });

      window.location.href = "profile.html";
    } else {
      window.location.href = "dashboard.html";
    }

  } catch (err) {
    console.error("Login error", err);
    alert("Google login failed");
  }
};

/* Auto login check */
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Already logged in");
  }
});

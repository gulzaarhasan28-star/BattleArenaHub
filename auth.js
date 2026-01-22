// auth.js
import { auth, db } from "./firebase-config.js";

import {
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  doc,
  getDoc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const provider = new GoogleAuthProvider();

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("googleLoginBtn");

  if (!btn) {
    console.error("Login button not found");
    return;
  }

  btn.addEventListener("click", async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      console.log("LOGIN SUCCESS:", user.email);

      const ref = doc(db, "users", user.uid);
      const snap = await getDoc(ref);

      if (!snap.exists()) {
        await setDoc(ref, {
          uid: user.uid,
          email: user.email,
          name: user.displayName,
          photo: user.photoURL,
          coins: 0,
          createdAt: new Date()
        });
        window.location.href = "profile.html";
      } else {
        window.location.href = "dashboard.html";
      }

    } catch (e) {
      alert("Login failed: " + e.message);
      console.error(e);
    }
  });
});

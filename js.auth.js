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

window.loginWithGoogle = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (e) {
    alert("Google login failed");
    console.error(e);
  }
};

onAuthStateChanged(auth, async (user) => {
  if (!user) return;

  const ref = doc(db, "users", user.uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    await setDoc(ref, {
      email: user.email,
      coins: 0,
      createdAt: new Date()
    });
    window.location.href = "profile.html";
  } else {
    window.location.href = "dashboard.html";
  }
});

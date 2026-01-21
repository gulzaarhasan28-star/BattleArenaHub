// auth.js
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

  const userRef = doc(db, "users", user.uid);
  const snap = await getDoc(userRef);

  if (!snap.exists()) {
    await setDoc(userRef, {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      coins: 0,
      createdAt: new Date()
    });
    window.location.href = "profile.html";
  } else {
    const data = snap.data();
    if (data.game === "bgmi") {
      window.location.href = "bgmi-dashboard.html";
    } else {
      window.location.href = "ff-dashboard.html";
    }
  }
});

// auth.js
// ✅ Google Login + User Routing (FINAL)

import { auth, db } from "./firebase-config.js";

import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/* 🔐 GOOGLE PROVIDER */
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

/* 🔘 LOGIN FUNCTION */
export async function loginWithGoogle() {
  try {
    await signInWithPopup(auth, provider);
  } catch (err) {
    console.error("Login failed:", err);
    alert("❌ Google login failed. Try again.");
  }
}

/* 🔁 AUTH STATE CHECK */
onAuthStateChanged(auth, async (user) => {
  if (!user) return;

  const userRef = doc(db, "users", user.uid);
  const snap = await getDoc(userRef);

  // 🆕 FIRST TIME USER
  if (!snap.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      name: user.displayName || "",
      email: user.email || "",
      photoURL: user.photoURL || "",
      coins: 0,
      weeklyCoins: 0,
      createdAt: serverTimestamp()
    });

    window.location.href = "profile.html";
    return;
  }

  // 👤 EXISTING USER
  const data = snap.data();

  if (!data.whatsapp || !data.game || !data.gameId) {
    window.location.href = "profile.html";
    return;
  }

  // 🎮 GAME BASED DASHBOARD
  if (data.game === "BGMI") {
    window.location.href = "bgmi-dashboard.html";
  } else if (data.game === "FREE_FIRE") {
    window.location.href = "ff-dashboard.html";
  } else {
    window.location.href = "profile.html";
  }
});

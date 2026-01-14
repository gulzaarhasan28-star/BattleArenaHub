// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDxFLrTwkUGF9FPWv6Ves7Uu5YHu4",
  authDomain: "battlearenahub-e8377.firebaseapp.com",
  projectId: "battlearenahub-e8377",
  storageBucket: "battlearenahub-e8377.firebasestorage.app",
  messagingSenderId: "183836362072",
  appId: "1:183836362072:web:e06705f1d7415cc3ceb20d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// Google Login
import { signInWithRedirect, getRedirectResult } from
"https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

window.login = () => {
  signInWithRedirect(auth, provider);
};

// Redirect ke baad result handle
getRedirectResult(auth).then((result) => {
  if (result && result.user) {
    window.location.href = "submit-id.html";
  }
}).catch((error) => {
  alert(error.message);
});

// BGMI Submit
window.submitBGMI = async () => {
  const name = document.getElementById("username").value;
  const id = document.getElementById("gameId").value;

  const user = auth.currentUser;
  if (!user) return alert("Login required");

  await addDoc(collection(db, "bgmi_submissions"), {
    uid: user.uid,
    email: user.email,
    ingameName: name,
    ingameId: id,
    time: serverTimestamp()
  });

  alert("✅ BGMI ID Submitted");
};
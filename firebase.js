// Your Firebase configuration - REPLACE WITH YOUR ACTUAL CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyDyXFlrTwnkUGFm9FPTw6lv6es7Uu5YhU4",
  authDomain: "battlearenahub-e8377.firebaseapp.com",
  projectId: "battlearenahub-e8377",
  storageBucket: "battlearenahub-e8377.firebasestorage.app",
  messagingSenderId: "183863662072",
  appId: "1:183863662072:web:e06705f1d7415cc3ceb20d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// Set custom parameters for Google Auth if needed
provider.setCustomParameters({
  prompt: 'select_account'
});
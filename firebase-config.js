<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js"></script>

<script>
const firebaseConfig = {
  apiKey: "AIzaSyDyXFlrTwnkUGFm9FPTw6lv6es7Uu5YhU4",
  authDomain: "battlearenahub-e8377.firebaseapp.com",
  projectId: "battlearenahub-e8377",
  storageBucket: "battlearenahub-e8377.firebasestorage.app",
  messagingSenderId: "183863662072",
  appId: "1:183863662072:web:e06705f1d7415cc3ceb20d"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// GLOBAL EXPORTS (VERY IMPORTANT)
window.auth = firebase.auth();
window.db = firebase.firestore();
window.provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
</script>
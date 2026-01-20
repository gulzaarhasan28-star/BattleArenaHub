// Authentication Functions
async function googleLogin() {
    try {
        const provider = new firebase.auth.GoogleAuthProvider();
        const result = await auth.signInWithPopup(provider);
        
        // Check if user exists
        const userDoc = await db.collection('users').doc(result.user.uid).get();
        
        if (!userDoc.exists) {
            // New user - redirect to profile setup
            window.location.href = 'profile.html';
        } else {
            // Existing user - redirect to dashboard
            window.location.href = 'dashboard.html';
        }
    } catch (error) {
        console.error('Login error:', error);
        alert('Login failed: ' + error.message);
    }
}

// Logout function
function logout() {
    auth.signOut().then(() => {
        window.location.href = 'index.html';
    });
}

// Check auth state
auth.onAuthStateChanged((user) => {
    if (user) {
        console.log('User logged in:', user.email);
    } else {
        console.log('No user logged in');
    }
});

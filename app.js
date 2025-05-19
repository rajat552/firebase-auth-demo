import { 
  auth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  onAuthStateChanged 
} from './firebase-config.js';

// DOM Elements
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');
const showLogin = document.getElementById('show-login');
const showSignup = document.getElementById('show-signup');
const authState = document.getElementById('auth-state');
const userEmail = document.getElementById('user-email');

// Toggle Forms
showLogin.addEventListener('click', () => {
    document.getElementById('signup-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
});

showSignup.addEventListener('click', () => {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('signup-container').style.display = 'block';
});

// Signup Handler
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert('Account created successfully!');
            signupForm.reset();
        })
        .catch(error => {
            alert(`Signup error: ${error.message}`);
        });
});

// Login Handler
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            loginForm.reset();
        })
        .catch(error => {
            alert(`Login error: ${error.message}`);
        });
});

// Auth State Listener
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById('signup-container').style.display = 'none';
        document.getElementById('login-container').style.display = 'none';
        authState.style.display = 'block';
        userEmail.textContent = user.email;
    } else {
        authState.style.display = 'none';
        document.getElementById('signup-container').style.display = 'block';
    }
});

// Signout Handler
document.getElementById('signout-btn').addEventListener('click', () => {
    auth.signOut();
});

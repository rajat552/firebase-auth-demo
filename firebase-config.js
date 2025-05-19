import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCvBc41b4OipciM85co5HEwbDj-uQI3Rx4",
  authDomain: "email-password-authentic-791f3.firebaseapp.com",
  projectId: "email-password-authentic-791f3",
  storageBucket: "email-password-authentic-791f3.firebasestorage.app",
  messagingSenderId: "396440928386",
  appId: "1:396440928386:web:818d1aa7a1c6b03425b49b",
  measurementId: "G-S4X93KCTZK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged };

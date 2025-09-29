// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCeLj-v5Coav6llAeDP30bKn4-k-OzpcQM",
  authDomain: "loginpage-536d9.firebaseapp.com",
  projectId: "loginpage-536d9",
  storageBucket: "loginpage-536d9.appspot.com",
  messagingSenderId: "445956902411",
  appId: "1:445956902411:web:b4d31d65a212f3fc46c10e",
  measurementId: "G-2QELSP6EJ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

// Select the form
const form = document.querySelector("form");

// Handle form submit
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent page reload

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
      window.location.href = "./projects.html"; // Redirect after login
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
});

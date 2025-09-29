import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCeLj-v5Coav6llAeDP30bKn4-k-OzpcQM",
  authDomain: "loginpage-536d9.firebaseapp.com",
  projectId: "loginpage-536d9",
  storageBucket: "loginpage-536d9.appspot.com",
  messagingSenderId: "445956902411",
  appId: "1:445956902411:web:b4d31d65a212f3fc46c10e",
  measurementId: "G-2QELSP6EJ0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;

  if (!email || !password || !confirm) {
    alert("Please fill in all fields.");
    return;
  }

  if (password !== confirm) {
    alert("Passwords do not match.");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    alert("Registration successful!");
    window.location.href = "./index.html"; // redirect to login page
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
});

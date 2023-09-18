// Import Firebase JavaScript SDK modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrBEGR7qpCY3txx73DfuJjOpYbvxNzIec",
    authDomain: "projects-80402.firebaseapp.com",
    projectId: "projects-80402",
    storageBucket: "projects-80402.appspot.com",
    messagingSenderId: "496560848010",
    appId: "1:496560848010:web:19d6c1b5b4196211b6c173",
    measurementId: "G-HX696XNQ43"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// Form submission event listener
document.getElementById("quote-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const quoteText = document.getElementById("quote-text").value;
  const author = document.getElementById("quote-author").value;

  try {
    // Add the new quote to Firestore with a random document ID
    const docRef = await addDoc(collection(db, "quotes"), {
        Quote: quoteText + " - " + author
    });

    // Clear the form field after successful submission
    document.getElementById("quote-text").value = "";

    alert("Quote added successfully with ID: " + docRef.id);
  } catch (error) {
    console.error("Error adding quote: ", error);
    alert("An error occurred while adding the quote.");
  }
});

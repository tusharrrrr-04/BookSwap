// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgQwYoIoQZISybPvdK-iXE2A-phEXvR8M",
  authDomain: "bookswap-book-inventory.firebaseapp.com",
  projectId: "bookswap-book-inventory",
  storageBucket: "bookswap-book-inventory.firebasestorage.app",
  messagingSenderId: "10562885894",
  appId: "1:10562885894:web:37ed72521bd0e1e9fd2687"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
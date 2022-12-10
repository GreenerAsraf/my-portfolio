// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAATXkQxCiRb7hXHmCuKCcJjAwacKk0J1M",
  authDomain: "my-portfolio-ec65b.firebaseapp.com",
  projectId: "my-portfolio-ec65b",
  storageBucket: "my-portfolio-ec65b.appspot.com",
  messagingSenderId: "1653235546",
  appId: "1:1653235546:web:f6c3d8e9e3a85a0a471d63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
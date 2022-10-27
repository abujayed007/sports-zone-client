// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASZe-QbSOQxwnQUxdbQu39DRu0LT5yFJc",
  authDomain: "sports-zone-dc4a9.firebaseapp.com",
  projectId: "sports-zone-dc4a9",
  storageBucket: "sports-zone-dc4a9.appspot.com",
  messagingSenderId: "748903418629",
  appId: "1:748903418629:web:f047230628c3ca52ac856c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
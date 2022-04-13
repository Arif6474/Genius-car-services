// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD17LRRrqRYmDIxZdvCUymPodr8lMABBSk",
  authDomain: "genius-car-services-23103.firebaseapp.com",
  projectId: "genius-car-services-23103",
  storageBucket: "genius-car-services-23103.appspot.com",
  messagingSenderId: "134185695734",
  appId: "1:134185695734:web:b7946eb8854e67bb4defd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
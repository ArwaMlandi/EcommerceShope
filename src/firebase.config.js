// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArrVbNWqDUrvINDLHuSoFTlT4Bpu0zlh4",
  authDomain: "shop-20dbe.firebaseapp.com",
  projectId: "shop-20dbe",
  storageBucket: "shop-20dbe.appspot.com",
  messagingSenderId: "91813338265",
  appId: "1:91813338265:web:4a54a1d710f0967210ec08",
  measurementId: "G-2YTX0K46X0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
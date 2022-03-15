import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5a3qi26gDWlKPinekREpYTd1vsF0Uk4M",
  authDomain: "filespapeleria.firebaseapp.com",
  projectId: "filespapeleria",
  storageBucket: "filespapeleria.appspot.com",
  messagingSenderId: "961210547923",
  appId: "1:961210547923:web:26409715081250adc1de26",
  measurementId: "G-E8QVWRL0N6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
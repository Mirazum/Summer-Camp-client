// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA8UPZEpeSz5lkClSoP30Br5D4y8oPcKVg",
//   authDomain: "summer-camp-1fddc.firebaseapp.com",
//   projectId: "summer-camp-1fddc",
//   storageBucket: "summer-camp-1fddc.appspot.com",
//   messagingSenderId: "498933021222",
//   appId: "1:498933021222:web:32f67bc3e80f70add0c4e7"
// };
console.log(import.meta.env.VITE_APIKEY)
const firebaseConfig = {
    apiKey:import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket:import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
import {} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMWm3HyS8v2JUsnuoVFVlv4MBsadCeSak",
  authDomain: "fitness-app-auth-8d739.firebaseapp.com",
  projectId: "fitness-app-auth-8d739",
  storageBucket: "fitness-app-auth-8d739.appspot.com",
  messagingSenderId: "184413193038",
  appId: "1:184413193038:web:3ac9570645ccb23129941f",
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

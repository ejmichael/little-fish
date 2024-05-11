import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-w_pPDIGOYPvH7KMQhQxjr4IFQqUknEA",
  authDomain: "littlefish-d33ed.firebaseapp.com",
  projectId: "littlefish-d33ed",
  storageBucket: "littlefish-d33ed.appspot.com",
  messagingSenderId: "678211745986",
  appId: "1:678211745986:web:8ed416e991afdeef87235b"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth}
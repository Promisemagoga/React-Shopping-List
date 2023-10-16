
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getStorage} from "firebase/storage";
import{getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyA1phreANDZNfUZJn8O0lkdwQJjbPF_sok",
  authDomain: "shopping-list-42382.firebaseapp.com",
  projectId: "shopping-list-42382",
  storageBucket: "shopping-list-42382.appspot.com",
  messagingSenderId: "972279247552",
  appId: "1:972279247552:web:aee8e1d09c7f6ec9b13325",
  measurementId: "G-F2Y0WRWK59"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)
const storage = getStorage(app)


export { db, storage}
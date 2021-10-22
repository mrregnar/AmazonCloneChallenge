import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';
import { getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD8S-NMV6K4PuKPbKcAmCRqWqLyuUuNz40",
  authDomain: "challenge-e818e.firebaseapp.com",
  projectId: "challenge-e818e",
  storageBucket: "challenge-e818e.appspot.com",
  messagingSenderId: "73740026066",
  appId: "1:73740026066:web:5ec04c1a92833ca6d6ed0b"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db, auth };

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCl5vsZTJBfa54oW4iwClAGWQ6jvJn8I5s",
  authDomain: "workshop-coder.firebaseapp.com",
  projectId: "workshop-coder",
  storageBucket: "workshop-coder.appspot.com",
  messagingSenderId: "197005871106",
  appId: "1:197005871106:web:e5ececbfaa4a48ee227f1b"
};

const app = initializeApp(firebaseConfig);

 export const BASE_DATOS= getFirestore(app);



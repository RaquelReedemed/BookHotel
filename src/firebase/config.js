// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

/* import { getAnalytics } from "firebase/analytics";
 */// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4l-CnUohnBRGCpVd2l95Dc1oXpxyBV6Y",
  authDomain: "book-hotel-d4411.firebaseapp.com",
  projectId: "book-hotel-d4411",
  storageBucket: "book-hotel-d4411.appspot.com",
  messagingSenderId: "501765641563",
  appId: "1:501765641563:web:f9f073d866264f3ff7f67e",
 /*  measurementId: "G-PT250MK5R8" */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)/*llamada a los metodo de firestore para usarlos en los componentes */
/* const auth = getAuth(app) */

/* const analytics = getAnalytics(app); */
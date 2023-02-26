// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD0Wf0VPzp_Pw-VDSfkEZ40p5SqQld9DDQ",
  authDomain: "hackathon-3409d.firebaseapp.com",
  projectId: "hackathon-3409d",
  storageBucket: "hackathon-3409d.appspot.com",
  messagingSenderId: "275902883277",
  appId: "1:275902883277:web:dcb72f6bdba394b0bd5084"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);


export {auth, db}
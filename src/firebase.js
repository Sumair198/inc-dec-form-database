import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDZ3GiAsAmOLoqmRHQXODB57UgvP_6fFMI",
    authDomain: "form-crud-a8b14.firebaseapp.com",
    projectId: "form-crud-a8b14",
    storageBucket: "form-crud-a8b14.appspot.com", 
    messagingSenderId: "394646819747",
    appId: "1:394646819747:web:1e3bd081ee123b9a2e4016",
    measurementId: "G-EQYVFD072G"
  };
const app = initializeApp(firebaseConfig);
export const db = getFirestore()
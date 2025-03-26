import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCubYCP2SrXO2NybQzs51hOB-KztXfl-6w",
  authDomain: "todo-app-9f6b6.firebaseapp.com",
  projectId: "todo-app-9f6b6",
  storageBucket: "todo-app-9f6b6.firebasestorage.app",
  messagingSenderId: "236942480889",
  appId: "1:236942480889:web:a4d819de66e0dab842d928",
  measurementId: "G-E4XEFB5X53",
  databaseURL: 'https://todo-app-9f6b6-default-rtdb.firebaseio.com',
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

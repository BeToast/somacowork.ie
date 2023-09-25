import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


export const measurementId = "G-D1LNVCEZ9C";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9EL6Lz-F99LPm6_5q2zU-5Qjuejurg64",
  authDomain: "soma-cowor.firebaseapp.com",
  projectId: "soma-cowor",
  storageBucket: "soma-cowor.appspot.com",
  messagingSenderId: "177534103773",
  appId: "1:177534103773:web:8f678b2dbc10b719546b34",
  measurementId: measurementId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Analytics and get a reference to the service
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
// console.log(analytics === null ? "No analytics" : "Analytics working");



// //AUTHENTICATION

// export const auth = getAuth(app);
// export const getFirebaseAuth = () => {
//   return auth;
// }
// connectAuthEmulator(auth, "http://127.0.0.1:9099");


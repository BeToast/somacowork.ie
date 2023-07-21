import { initializeApp } from "firebase/app";

// import { getAnalytics } from "firebase/analytics";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9EL6Lz-F99LPm6_5q2zU-5Qjuejurg64",
  authDomain: "soma-cowor.firebaseapp.com",
  projectId: "soma-cowor",
  storageBucket: "soma-cowor.appspot.com",
  messagingSenderId: "177534103773",
  appId: "1:177534103773:web:8f678b2dbc10b719546b34",
  measurementId: "G-D1LNVCEZ9C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const getFirebaseApp = () => {
  return app;
}

// //AUTHENTICATION

// export const auth = getAuth(app);
// export const getFirebaseAuth = () => {
//   return auth;
// }
// connectAuthEmulator(auth, "http://127.0.0.1:9099");


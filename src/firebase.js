import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9Wlal-1rYVbE3QAIWLR3pYtaoWfuPaMg",
  authDomain: "pta-english-ecommerce.firebaseapp.com",
  projectId: "pta-english-ecommerce",
  storageBucket: "pta-english-ecommerce.firebasestorage.app",
  messagingSenderId: "444024623644",
  appId: "1:444024623644:web:63539372d4940ecc1f85d9",
  measurementId: "G-NC5JZV905N"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;
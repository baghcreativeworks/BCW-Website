import { initializeApp } from "firebase/app";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // TODO: Replace with your actual config from Firebase Console
    apiKey: "AIzaSyA8aaOClhdyfOWRMBKxeXV6LlSvozinSdU",
    authDomain: "bagh-creative-works-website.firebaseapp.com",
    projectId: "bagh-creative-works-website",
    storageBucket: "bagh-creative-works-website.firebasestorage.app",
    messagingSenderId: "625168870903",
    appId: "1:625168870903:web:870ce9d50f1f2ca34992f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const functions = getFunctions(app);

// Connect to emulator if running locally
if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
    connectFunctionsEmulator(functions, "127.0.0.1", 5001);
}

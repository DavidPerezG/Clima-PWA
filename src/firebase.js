


importScripts("https://www.gstatic.com/firebasejs/9.18.0/firebase-app-compat.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/9.18.0/firebase-messaging-compat.js");


// Import the functions you need from the SDKs you need

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// @ts-ignore
export const messaging = getMessaging(app);
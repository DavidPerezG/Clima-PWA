// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getMessaging } from "firebase/messaging";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCu6EP3UThBCZQIaQOXhVkvKFBNmagaNe0",
//   authDomain: "notifydev-11aba.firebaseapp.com",
//   projectId: "notifydev-11aba",
//   storageBucket: "notifydev-11aba.appspot.com",
//   messagingSenderId: "1088369610900",
//   appId: "1:1088369610900:web:01d7854551b98b18c26481"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const messaging = getMessaging(app);

// messaging.onBackgroundMessage(payload => {
//   console.log("Recibiste un mensaje mientras estabas ausente");
//   console.log(payload);
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: "./logo192.png"
//   };

//   return self.ServiceWorkerRegistration.showNotification(
//     notificationTitle,
//     notificationOptions
//   );

// })


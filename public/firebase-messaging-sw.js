//importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
//importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

import {initializeApp} from "firebase/compat/app"
import {getMessaging} from "firebase/compat/messaging"
import {onBackgroundMessage} from "firebase/messaging/sw"

const firebase = initializeApp({
    apiKey: "AIzaSyBPQB-qDuYviqJf74p7CbrEAfDxhGlf_DY",
    authDomain: "mentor-codes.firebaseapp.com",
    projectId: "mentor-codes",
    storageBucket: "mentor-codes.appspot.com",
    messagingSenderId: "714645639749",
    appId: "1:714645639749:web:e988f4f9e5762b6bbd492c",
    measurementId: "G-GGDQPVESBY"
});

//firebase.initializeApp(firebaseConfig)


// const messaging = firebase.messaging();
// messaging.onBackgroundMessage(function (payload) {
//     console.log("Received background message ", payload);
//     const notificationTitle = payload.notification.title;
//     const notificationOptions = {
//         body: payload.notification.body,
//         icon: "/logo192.png",
//     };
//     return self.registration.showNotification(
//         notificationTitle,
//         notificationOptions
//     );
// });


const messaging = getMessaging();
onBackgroundMessage(messaging, (payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/logo192.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
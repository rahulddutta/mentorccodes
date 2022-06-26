import firebase from "firebase/compat/app"
import "firebase/compat/messaging"

const firebaseConfig = {
  apiKey: "AIzaSyBPQB-qDuYviqJf74p7CbrEAfDxhGlf_DY",
  authDomain: "mentor-codes.firebaseapp.com",
  projectId: "mentor-codes",
  storageBucket: "mentor-codes.appspot.com",
  messagingSenderId: "714645639749",
  appId: "1:714645639749:web:e988f4f9e5762b6bbd492c",
  measurementId: "G-GGDQPVESBY"
};

firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging()

const {REACT_APP_VAPID_KEY} = "BB_3Y4SGyVG-l1Re6wTVmT0rbU0SWbh1yQYeMIDzzPgC3_YpC6TyvCj8kdhAWdh7nVOcqrBh2UaZ7O5Qw71vZaI" 
const publickey = REACT_APP_VAPID_KEY


export const getToken = async (setTokenFound) => {
  let currentToken = "";

  try {
    currentToken = await messaging.getToken({vapidKey: publickey})
    if(currentToken) {
      setTokenFound(true)
    }else {
      setTokenFound(false)
    }
  } catch(error) {
    console.log("An error occured")
  }

  return currentToken
}

export const OnMessageListener = () => 
new Promise((resolve) => {
  messaging.onMessage((payload) => {
    resolve(payload)
  })
})

export {firebase} 
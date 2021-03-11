
import firebase from "firebase/app"
import "firebase/auth"



const app = firebase.initializeApp({
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID
    apiKey: "AIzaSyDpMs__-m9V8nNf5vzqvHpjcq-yP122MbA",
    authDomain: "form-clone-2021.firebaseapp.com",
    projectId: "form-clone-2021",
    storageBucket: "form-clone-2021.appspot.com",
    messagingSenderId: "1053420827240",
    appId: "1:1053420827240:web:4834bd2db4bd1d4a4c81dd"

})

export const auth = app.auth()
export default app


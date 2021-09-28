import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC8UDzQk7ugwu5HgpPAZZ4fBrqJljISYvU",
    authDomain: "signal-clone-yt-30bc7.firebaseapp.com",
    projectId: "signal-clone-yt-30bc7",
    storageBucket: "signal-clone-yt-30bc7.appspot.com",
    messagingSenderId: "16696159511",
    appId: "1:16696159511:web:48049e7758772a0bdf1b52"
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
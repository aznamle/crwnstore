import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA9G5HRBH-LoqOMVzkt-xa5Lpo4zDmJXA8",
    authDomain: "crwn-db-9bde6.firebaseapp.com",
    databaseURL: "https://crwn-db-9bde6.firebaseio.com",
    projectId: "crwn-db-9bde6",
    storageBucket: "crwn-db-9bde6.appspot.com",
    messagingSenderId: "497405671347",
    appId: "1:497405671347:web:e9987b2af50d317e62fdc6",
    measurementId: "G-L9JGQGQS5Z"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
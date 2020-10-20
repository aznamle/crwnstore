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
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
    //if there is no user authenticated
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    const snapShot = await userRef.get();

    //if there is no document, then create a new object/document and returns userRef in App
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
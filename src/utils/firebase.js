// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDUJoykJxBrSc_wMm70AIYLQpYfRg3cuRw',
  authDomain: 'cashdash-01.firebaseapp.com',
  databaseURL: 'https://cashdash-01.firebaseio.com',
  projectId: 'cashdash-01',
  storageBucket: 'cashdash-01.appspot.com',
  messagingSenderId: '344150785075',
  appId: '1:344150785075:web:09d496cd17c9524856f746',
  measurementId: 'G-EPSX06J8GN',
};

firebase.initializeApp(firebaseConfig);

export const fireMethods = {
  dataBase: firebase.firestore(),
  auth: firebase.auth(),
};
fireMethods.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

export const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () =>
  fireMethods.auth.signInWithPopup(provider);

export const signOut = () => fireMethods.auth.signOut();

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;
  //get a reference to the place in the db where a user profile might be.
  const userRef = fireMethods.dataBase.doc(`users/{user.uid}`);
  // Go and fetch the document from that location
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email, photoURL } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData,
      });
    } catch (e) {
      console.error('error creating user', e);
    }
  }

  getUserDocument(user.uid);
};

export const getUserDocument = async (uid) => {
  if (!uid) return null;
  const userDocument = await fireMethods.dataBase
    .collection('users')
    .doc(uid)
    .get();
  return { uid, ...userDocument.data() };
};

export default firebase;

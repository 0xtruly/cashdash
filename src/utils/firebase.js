import * as firebase from 'firebase';
import 'firebase/firestore';

import config from './config.json';

let cashdash = firebase.initializeApp(config, 'cashdash');

export const _dataBase = cashdash.firestore();
export const _auth = cashdash.auth();
export const storage = cashdash.storage();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => _auth.signInWithPopup(provider);
export const signOut = () =>
  _auth
    .signOut()
    .then(() => console.log('signed out'))
    .catch((e) => console.log(e.message));

window.firebase = firebase;

if (process.env.NODE_ENV === 'test') {
  _auth.setPersistence(firebase.auth.Auth.Persistence.NONE);
} else {
  _auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
}

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;
  // Get a reference to the place in the database where a user profile might be.
  const userRef = firestore.collection('users').doc(user.uid);

  // Go and fetch the document from that location.
  const snapshot = await userRef.get();
  console.log('snappp', snapshot);

  if (!snapshot.exists) {
    const { displayName, email, photoURL, uid } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        uid,
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error('Error creating user', error.message);
    }
  }

  return getUserDocument(user.uid);
};

export const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    return firestore.collection('users').doc(uid);
  } catch (error) {
    console.error('Error fetching user', error.message);
  }
};

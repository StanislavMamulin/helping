/* eslint-disable no-console */
import auth from '@react-native-firebase/auth';

export const firebaseSignInAnonymously = async () => {
  try {
    await auth().signInAnonymously();
  } catch (err) {
    if (err.code === 'auth/operation-not-allowed') {
      console.log('Enable anonymous in your firebase console.');
    }

    console.error(err);
  }
};

export const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
  }
};

export const createUserWithEmailAndPassword = async (email, password) => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
  } catch (err) {
    if (err.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (err.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(err);
  }
};

export const signOut = async () => {
  try {
    await auth.signOut();
    console.log('User signed out!');
  } catch (err) {
    console.error(err);
  }
};

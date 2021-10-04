/* eslint-disable no-console */
import auth from '@react-native-firebase/auth';
import { getFacebookAccessToken } from '../socialAuthManager';

export const firebaseSignInAnonymously = async () => {
  try {
    const anonymousUserCredential = await auth().signInAnonymously();
    return anonymousUserCredential.user.toJSON();
  } catch (err) {
    if (err.code === 'auth/operation-not-allowed') {
      console.log('Enable anonymous in your firebase console.');
    }

    console.error(err);
    return null;
  }
};

export const signInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(
      email,
      password,
    );
    return userCredential.user.toJSON();
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const createUserWithEmailAndPassword = async (email, password) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
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
    await auth().signOut();
    console.log('User signed out!');
  } catch (err) {
    console.error(err);
  }
};

export const signInWithFB = async () => {
  try {
    const fbAccessToken = await getFacebookAccessToken();

    // Create a Firebase credential with the AccessToken
    const facebookCredential =
      auth.FacebookAuthProvider.credential(fbAccessToken);

    // Sign-in the user with the credential
    return (
      await auth().signInWithCredential(facebookCredential)
    ).user.toJSON();
  } catch (err) {
    console.error(err);
    return null;
  }
};

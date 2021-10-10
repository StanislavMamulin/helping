/* eslint-disable no-console */
import {
  firebaseSignInAnonymously,
  signInWithEmailAndPassword,
  signInWithFB,
} from './firebase/auth';
import {
  searchUserByEmail,
  searchUserByUID,
  makeUserByEmailAndID,
  makeFacebookUserWithID,
  makeUserWithID,
} from './firebase/user';

export const getUserByEmail = async email => {
  try {
    return await searchUserByEmail(email);
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getUserByUID = async uid => {
  try {
    return await searchUserByUID(uid);
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const createUserByEmailAndID = async (email = '', id = '') => {
  try {
    makeUserByEmailAndID(email, id);
  } catch (err) {
    console.error(err);
  }
};

export const createFacebookUserWithID = async (id, userInfo) => {
  try {
    makeFacebookUserWithID(id, userInfo);
  } catch (err) {
    console.error(err);
  }
};

export const createUserWithID = async (id, userInfo) => {
  try {
    makeUserWithID(id, userInfo);
  } catch (err) {
    console.error(err);
  }
};

export const signInByEmailAndPassword = async (email = '', password = '') => {
  try {
    return await signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const signInAnonymously = async () => {
  try {
    return await firebaseSignInAnonymously();
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const signInWithFacebook = async () => {
  try {
    return await signInWithFB();
  } catch (err) {
    console.error(err);
    return null;
  }
};

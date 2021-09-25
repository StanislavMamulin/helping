/* eslint-disable no-console */
import {
  searchUserByEmail,
  searchUserByUID,
  makeUserByEmailAndID,
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

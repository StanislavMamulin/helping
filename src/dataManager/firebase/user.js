/* eslint-disable no-console */
import firestore from '@react-native-firebase/firestore';

export const searchUserByEmail = async (email = '') => {
  try {
    const userSnapshot = await firestore()
      .collection('Users')
      .where('email', '==', email.toLocaleLowerCase())
      .get();

    if (!userSnapshot.empty) {
      return userSnapshot.docs[0].data();
    }

    return null;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const searchUserByUID = async (uid = '') => {
  try {
    const userDoc = await firestore().collection('Users').doc(uid).get();

    if (userDoc.exists) {
      return userDoc.data();
    }

    return null;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const makeUserByEmailAndID = async (email = '', id = '') => {
  try {
    firestore().collection('Users').doc(id).set({ email });
  } catch (err) {
    console.error(err);
  }
};

export const makeFacebookUserWithID = async (id = '', userInfo = {}) => {
  try {
    firestore().collection('Users').doc(id).set(userInfo);
  } catch (err) {
    console.error(err);
  }
};

export const makeUserWithID = async (id = '', userInfo = {}) => {
  try {
    await firestore().collection('Users').doc(id).set(userInfo);
  } catch (err) {
    console.error(err);
  }
};

export const updateUserInfoByID = async (id = '', info = {}) => {
  try {
    firestore().collection('Users').doc(id).update(info);
  } catch (err) {
    console.error(err);
  }
};

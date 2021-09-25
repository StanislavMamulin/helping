/* eslint-disable no-console */
import firestore from '@react-native-firebase/firestore';

export const searchUserByEmail = async (email = '') => {
  try {
    const userSnapshot = await firestore()
      .collection('Users')
      .where('Email', '==', email.toLocaleLowerCase())
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

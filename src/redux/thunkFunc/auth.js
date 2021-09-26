import { FacebookUserInfoToUsersCollection } from '../../dataManager/data/dataConverter';
import {
  getUserByEmail,
  getUserByUID,
  signInByEmailAndPassword,
  signInAnonymously,
  signInWithFacebook,
  createFacebookUserWithID,
} from '../../dataManager/userManager';

export const signByEmail = async ({ email, password }) => {
  try {
    const firebaseUser = await signInByEmailAndPassword(email, password);
    const userInfo = await getUserByEmail(email);

    return {
      ...firebaseUser,
      ...userInfo,
    };
  } catch (err) {
    console.error(err);
    return {};
  }
};

export const checkAuth = async (_arg, { getState }) => {
  try {
    const currentUser = getState().user.user;
    if (!currentUser) {
      return await signInAnonymously();
    }
    return currentUser;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const signInByFB = async () => {
  try {
    const facebookUser = await signInWithFacebook();
    const { uid } = facebookUser;

    let userInfo = await getUserByUID(uid);
    if (!userInfo) {
      // create new user in Users collection
      userInfo = FacebookUserInfoToUsersCollection(facebookUser);
      createFacebookUserWithID(uid, userInfo);
    }

    return {
      ...facebookUser,
      ...userInfo,
    };
  } catch (err) {
    console.error(err);
    return null;
  }
};

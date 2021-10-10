import { facebookUserInfoToUsersCollection } from '../../dataManager/data/dataConverter';
import {
  getUserByEmail,
  getUserByUID,
  signInByEmailAndPassword,
  signInAnonymously,
  signInWithFacebook,
  createFacebookUserWithID,
} from '../../dataManager/userManager';
import { showErrorWithMessage } from '../../helpers/error';

export const signByEmail = async ({ email, password }, { rejectWithValue }) => {
  try {
    const firebaseUser = await signInByEmailAndPassword(email, password);

    if (firebaseUser.error) {
      throw new Error(firebaseUser.message);
    }

    const userInfo = await getUserByEmail(email);

    return {
      ...firebaseUser,
      ...userInfo,
    };
  } catch (err) {
    console.error(err);
    showErrorWithMessage(err.message);
    return rejectWithValue(err.message);
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
      userInfo = facebookUserInfoToUsersCollection(facebookUser);
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

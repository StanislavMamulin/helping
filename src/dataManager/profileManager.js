import { uploadAvatarToCloud } from './firebase/profile';
import { updateUserInfoByID } from './firebase/user';

export const uploadAvatar = async (userID, imageSource) => {
  try {
    const avatarURL = await uploadAvatarToCloud(userID, imageSource);
    return avatarURL;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const changeUserInfo = async (userID, userInfo) => {
  try {
    await updateUserInfoByID(userID, userInfo);
  } catch (err) {
    console.error(err);
  }
};

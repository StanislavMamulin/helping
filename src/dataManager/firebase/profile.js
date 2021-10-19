import storage from '@react-native-firebase/storage';

export const uploadAvatarToCloud = async (userID, imageSource) => {
  try {
    const reference = storage().ref(`avatars/${userID}.png`);
    await reference.putFile(imageSource);
    const downloadURL = await reference.getDownloadURL();
    return downloadURL;
  } catch (err) {
    console.error(err);
    return null;
  }
};

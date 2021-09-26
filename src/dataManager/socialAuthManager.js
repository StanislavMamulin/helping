import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

export const getFacebookAccessToken = async () => {
  const result = await LoginManager.logInWithPermissions([
    'public_profile',
    'email',
  ]);

  if (result.isCancelled) {
    throw new Error('User cancelled the login process');
  }

  // Once signed in, get the users AccesToken
  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw new Error('Something went wrong obtaining access token');
  }

  return data.accessToken;
};

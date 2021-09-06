import auth from '@react-native-firebase/auth';

export const firebaseSignInAnonymously = async () => {
  await auth()
    .signInAnonymously()
    .then(() => {
      console.log('Anonymous signed in');
    })
    .catch(error => {
      if (error.code === 'auth/operation-not-allowed') {
        console.log('Enable anonymous in your firebase console.');
      }

      console.error(error);
    });
};

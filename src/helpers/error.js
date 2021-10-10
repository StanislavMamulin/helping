import { Alert } from 'react-native';

export const showErrorWithMessage = message => {
  Alert.alert('Ошибка', message, [{ text: 'OK' }]);
};

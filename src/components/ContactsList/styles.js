import { StyleSheet } from 'react-native';
import { textStyles } from '../../commonStyles/text';

export const inputFieldStyles = StyleSheet.create({
  title: {
    ...textStyles.TEXT_STYLE_POPUP_FIELD_TITLE,
  },
  textInput: {
    textAlign: 'center',
  },
  container: {
    marginBottom: 20,
  },
});

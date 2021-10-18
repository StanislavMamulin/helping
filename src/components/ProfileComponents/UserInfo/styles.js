import { StyleSheet } from 'react-native';
import { textStyles } from '../../../commonStyles/text';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 0,
  },
  title: {
    ...textStyles.TEXT_STYLE_14,
    marginBottom: 16,
  },
  textInput: {
    paddingTop: 0,
    borderBottomWidth: 0,
  },
  inputContainer: {
    marginBottom: 10,
  },
});

export const inputStyle = {
  textInput: styles.textInput,
  container: styles.inputContainer,
};

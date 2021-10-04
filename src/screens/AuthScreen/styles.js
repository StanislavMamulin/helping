import { StyleSheet } from 'react-native';
import { textStyles } from '../../commonStyles/text';

const DEFAULT_MARGIN = 20;
const defaultMargin = {
  marginBottom: DEFAULT_MARGIN,
};

export const styles = StyleSheet.create({
  container: {
    padding: DEFAULT_MARGIN,
  },
  text: {
    ...defaultMargin,
    marginHorizontal: 35,
    marginTop: 20,
    ...textStyles.TEXT_STYLE_3,
  },
  socialButtonsBlock: {
    ...defaultMargin,
  },
  emailField: {
    ...defaultMargin,
  },
  passwordField: {
    ...defaultMargin,
  },
  button: {
    ...defaultMargin,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

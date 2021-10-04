import { StyleSheet } from 'react-native';
import { textStyles } from '../../../commonStyles/text';
import { colors } from '../../../commonStyles/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  title: {
    ...textStyles.TEXT_STYLE_15,
  },
  textInput: {
    width: '100%',
    paddingLeft: 0,
    paddingBottom: 3,
    ...textStyles.TEXT_STYLE_8,
  },
  textInputFocused: {
    borderBottomWidth: 2,
    borderBottomColor: colors.LEAF,
  },
  textInputBlurred: {
    borderBottomWidth: 1,
    borderBottomColor: colors.BLACK_12,
  },
});

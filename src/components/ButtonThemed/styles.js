import { StyleSheet } from 'react-native';
import { themeColors } from '../../commonStyles/theme';
import { textStyles } from '../../commonStyles/text';

export const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',

    paddingTop: 13,
    paddingBottom: 12,
    backgroundColor: themeColors.main,
    borderRadius: 2,

    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.25,
    elevation: 4,
  },
  text: {
    ...textStyles.TEXT_STYLE_17,
  },
});

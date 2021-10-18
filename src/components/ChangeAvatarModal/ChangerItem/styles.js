import { StyleSheet } from 'react-native';
import { colors } from '../../../commonStyles/colors';
import { textStyles } from '../../../commonStyles/text';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: colors.LEAF,
  },
  text: {
    ...textStyles.TEXT_STYLE_16,
    marginLeft: 24,
  },
});

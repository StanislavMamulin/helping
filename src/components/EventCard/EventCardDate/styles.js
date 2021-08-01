import { StyleSheet } from 'react-native';
import { colors } from '../../../commonStyles/colors';
import { textStyles } from '../../../commonStyles/text';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.TURTLE_GREEN,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginVertical: 4,
    marginRight: 5,
  },
  text: {
    ...textStyles.TEXT_STYLE_9,
  },
});

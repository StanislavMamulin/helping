import { StyleSheet } from 'react-native';
import { textStyles } from '../../../commonStyles/text';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    height: 58,
    paddingRight: 8,
  },
  text: {
    ...textStyles.TEXT_STYLE_8,
    flex: 1,
  },
  image: {
    width: 48,
    height: 48,
    marginRight: 20,
    borderRadius: 24,
  },
});

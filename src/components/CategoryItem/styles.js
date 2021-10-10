import { StyleSheet } from 'react-native';
import { textStyles } from '../../commonStyles/text';
import { colors } from '../../commonStyles/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 12,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: colors.LIGHT_GREY,
  },
  imageContainer: {
    width: 120,
    height: 80,
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    ...textStyles.TEXT_STYLE,
  },
});

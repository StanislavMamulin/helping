import { StyleSheet } from 'react-native';
import { textStyles } from '../../commonStyles/text';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'red',
    borderWidth: 1,
  },
  scrollImage: {
    aspectRatio: 0.967,
    height: 181,

    marginTop: 42,
  },
  title: {
    ...textStyles.TEXT_STYLE_5,
    marginBottom: 10,
  },
  description: {
    ...textStyles.TEXT_STYLE_3,
  },
  bottomDescriptionBlock: {
    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 13,
  },
  arrowImage: {
    height: 70,
    aspectRatio: 1.43,
  },
});

import { StyleSheet } from 'react-native';
import { textStyles } from '../../commonStyles/text';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 188,
    height: 188,

    marginTop: 53,
  },
  link: {
    ...textStyles.TEXT_STYLE_LINK,
  },
  secondHintContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  firstHint: {
    ...textStyles.TEXT_STYLE_3,

    marginTop: 37,
    marginHorizontal: 58,
  },
  secondHint: {
    ...textStyles.TEXT_STYLE_10,
  },
});

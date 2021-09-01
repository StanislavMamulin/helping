import { StyleSheet } from 'react-native';
import { textStyles } from '../../../commonStyles/text';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  contactText: {
    ...textStyles.TEXT_STYLE_10,
    flex: 1,
  },
  link: {
    ...textStyles.TEXT_STYLE_LINK,
  },
});

export default styles;

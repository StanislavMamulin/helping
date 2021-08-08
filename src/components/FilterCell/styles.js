import { StyleSheet } from 'react-native';
import { textStyles } from '../../commonStyles/text';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    height: 55,
    marginRight: 16,
  },
  typeOfHelp: {
    ...textStyles.TEXT_STYLE_8,
  },
});

export default styles;

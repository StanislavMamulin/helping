import { StyleSheet } from 'react-native';
import { textStyles } from '../../../../commonStyles/text';

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 7,
  },
  label: {
    ...textStyles.TEXT_STYLE_HELP_BUTTON,
  },
});

export default styles;

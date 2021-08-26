import { StyleSheet } from 'react-native';
import { textStyles } from '../../../commonStyles/text';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexBasis: 70,

    backgroundColor: 'white',
    borderTopColor: '#d8d8d8',
    borderTopWidth: 1,
  },
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
  separator: {
    width: 1,
    height: 70,
    opacity: 0.45,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default styles;

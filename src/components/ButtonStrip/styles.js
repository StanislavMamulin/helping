import { StyleSheet } from 'react-native';
import { textStyles } from '../../commonStyles/text';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 8,
  },
  button: {
    marginLeft: 8,
    paddingVertical: 8,
  },
  buttonText: {
    ...textStyles.EXT_STYLE_POPUP_BUTTON,
    marginHorizontal: 8,
  },
});

import { StyleSheet } from 'react-native';
import { sizes } from '../../commonStyles/sizes';
import { textStyles } from '../../commonStyles/text';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoutButton: {
    marginHorizontal: 97,
    marginTop: 20,
    marginBottom: sizes.CENTRAL_BUTTON_OFFSET,
  },
  logoutButtonText: {
    ...textStyles.TEXT_STYLE_7,
  },
});

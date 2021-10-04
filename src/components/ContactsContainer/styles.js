import { StyleSheet } from 'react-native';
import { textStyles } from '../../commonStyles/text';

export const styles = StyleSheet.create({
  contactsContainer: {
    paddingTop: 21,
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  headerTitle: {
    ...textStyles.TEXT_STYLE_POPUP_HEADER,
    textAlign: 'center',
    marginBottom: 12,
  },
  fieldTitle: {
    ...textStyles.TEXT_STYLE_POPUP_FIELD_TITLE,
  },
});

import { StyleSheet } from 'react-native';
import { textStyles } from '../../commonStyles/text';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    borderRadius: 2,
  },
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.56)',
  },
});

export const inputFieldStyles = StyleSheet.create({
  title: {
    ...styles.fieldTitle,
  },
  textInput: {
    textAlign: 'center',
  },
  container: {
    marginBottom: 20,
  },
});

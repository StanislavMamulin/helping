import { StyleSheet } from 'react-native';
import { textStyles } from '../../commonStyles/text';
import { colors } from '../../commonStyles/colors';

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
    marginBottom: 10,
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
    ...textStyles.TEXT_STYLE_POPUP_FIELD_TITLE,
  },
  textInput: {
    textAlign: 'center',
  },
  container: {
    marginBottom: 10,
    marginTop: 20,
  },
});

export const tabStyles = StyleSheet.create({
  tabStyle: {
    borderColor: colors.LEAF,
    paddingVertical: 5,
  },
  activeTab: {
    backgroundColor: colors.LEAF,
  },
  tabText: {
    ...textStyles.EXT_STYLE_POPUP_BUTTON,
  },
});

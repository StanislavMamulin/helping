import { StyleSheet, Dimensions } from 'react-native';
import { textStyles } from '../../commonStyles/text';
import { colors } from '../../commonStyles/colors';

const HEADER_SEARCH_FIELD_HORIZONTAL_MARGIN = 8;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,

    height: 48,
    width:
      Dimensions.get('screen').width - HEADER_SEARCH_FIELD_HORIZONTAL_MARGIN,

    backgroundColor: 'white',
    borderRadius: 2,

    // shadowColor: colors.BLACK_24,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.25,
    elevation: 5,
  },
  icons: {
    width: 24,
    height: 24,
    tintColor: 'black',
    flexShrink: 1,
  },
  searchField: {
    marginHorizontal: 24,
    flexGrow: 1,
    padding: 0,
  },
  searchText: {
    ...textStyles.TEXT_STYLE_SEARCH_TEXT,
  },
  placeholderText: {
    color: colors.BLACK_38,
  },
});

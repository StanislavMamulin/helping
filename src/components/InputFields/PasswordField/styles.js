import { StyleSheet } from 'react-native';
import { colors } from '../../../commonStyles/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    flexGrow: 1,
    flexShrink: 1,
  },
  icons: {
    width: 24,
    height: 24,
  },
  showHideContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 4,
    flexShrink: 0,
  },
  show: {},
  hide: {
    marginLeft: 8,
  },
  textInputFocused: {
    borderBottomWidth: 2,
    borderBottomColor: colors.LEAF,
  },
  textInputBlurred: {
    borderBottomWidth: 1,
    borderBottomColor: colors.BLACK_12,
  },
});

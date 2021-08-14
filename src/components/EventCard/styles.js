import { StyleSheet } from 'react-native';
import { colors } from '../../commonStyles/colors';

export const styles = StyleSheet.create({
  container: {
    margin: 8,
    marginBottom: 0,
    borderRadius: 2,
    backgroundColor: colors.WHITE,
    overflow: 'hidden',

    shadowColor: colors.BLACK_35,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 4,

    elevation: 4,
  },
});

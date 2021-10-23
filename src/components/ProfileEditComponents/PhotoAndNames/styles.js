import { StyleSheet } from 'react-native';
import { colors } from '../../../commonStyles/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,

    borderBottomWidth: 1,
    borderBottomColor: colors.COOL_GREY,
  },
  namesBlock: {
    marginLeft: 20,
  },
});

export const inputStyles = {
  container: {
    marginBottom: 20,
  },
};

export const avatarSize = 136;

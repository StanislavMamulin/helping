import { StyleSheet } from 'react-native';
import { textStyles } from '../../../commonStyles/text';
import { colors } from '../../../commonStyles/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 2,

    paddingVertical: 8,
    paddingHorizontal: 38,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  title: {
    ...textStyles.TEXT_STYLE_6,
    marginTop: 8,
  },
  helpProvided: {
    ...textStyles.TEXT_STYLE_3,
    marginBottom: 10,
  },
  dateContainer: {
    backgroundColor: 'transparent',
  },
  dateText: {
    color: colors.BLACK_70,
  },
  dateIcon: {
    tintColor: colors.BLACK_70,
  },
  button: {
    marginBottom: 8,
    marginHorizontal: 67,
  },
});

export const dateTheme = {
  container: styles.dateContainer,
  text: styles.dateText,
  icon: styles.dateIcon,
};

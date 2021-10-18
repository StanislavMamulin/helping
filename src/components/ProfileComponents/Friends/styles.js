import { StyleSheet } from 'react-native';
import { colors } from '../../../commonStyles/colors';
import { textStyles } from '../../../commonStyles/text';

const styles = StyleSheet.create({
  container: {
    padding: 20,

    borderBottomWidth: 1,
    borderBottomColor: colors.COOL_GREY,
    borderTopWidth: 1,
    borderTopColor: colors.COOL_GREY,
  },
  title: {
    ...textStyles.TEXT_STYLE_15,
    marginBottom: 16,
  },
});

export default styles;

import { StyleSheet } from 'react-native';
import { textStyles } from '../../commonStyles/text';
import { listColors } from '../../commonStyles/colors';

const styles = StyleSheet.create({
  title: {
    ...textStyles.TEXT_STYLE_10,
    margin: 20,
  },
  list: {
    backgroundColor: listColors.background,

    borderTopColor: listColors.border,
    borderTopWidth: 1,

    borderBottomColor: listColors.border,
    borderBottomWidth: 1,

    paddingLeft: 20,
  },
  separator: {
    height: 1,
    backgroundColor: listColors.separator,
  },
});

export default styles;

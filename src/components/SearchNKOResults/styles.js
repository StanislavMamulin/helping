import { StyleSheet } from 'react-native';
import { textStyles } from '../../commonStyles/text';
import { listColors } from '../../commonStyles/colors';
import { sizes } from '../../commonStyles/sizes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    ...textStyles.TEXT_STYLE_13,
  },
  headerTextContainer: {
    padding: 20,
  },
  list: {
    backgroundColor: listColors.background,

    borderTopColor: listColors.border,
    borderTopWidth: 1,

    borderBottomColor: listColors.border,
    borderBottomWidth: 1,

    paddingLeft: 20,
  },
  footer: {
    height: sizes.CENTRAL_BUTTON_OFFSET,

    borderTopColor: listColors.border,
    borderTopWidth: 1,
  },
});

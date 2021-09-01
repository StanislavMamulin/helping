import { StyleSheet } from 'react-native';
import { textStyles } from '../../../commonStyles/text';

export const HELPERS_BG_COLOR = '#e9eded';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',

    height: 76,
    paddingHorizontal: 20,

    backgroundColor: HELPERS_BG_COLOR,
  },
  countText: {
    ...textStyles.TEXT_STYLE_HELPERS_COUNT,
  },
});

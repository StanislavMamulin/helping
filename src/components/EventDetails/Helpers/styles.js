import { StyleSheet } from 'react-native';
import { textStyles } from '../../../commonStyles/text';

const HELPERS_BG_COLOR = '#e9eded';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',

    height: 76,
    paddingHorizontal: 20,

    backgroundColor: HELPERS_BG_COLOR,
  },
  avatar: {
    height: 36,
    width: 36,
    borderRadius: 18,
    borderColor: HELPERS_BG_COLOR,
    borderWidth: 2,
  },
  countText: {
    ...textStyles.TEXT_STYLE_HELPERS_COUNT,
  },
  avatarsContainer: {
    flexDirection: 'row',
    marginRight: -10,
  },
});

export default styles;

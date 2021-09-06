import { StyleSheet } from 'react-native';
import { headerStyle } from '../../styles';
import { textStyles } from '../../../commonStyles/text';
import { colors } from '../../../commonStyles/colors';

const { color, ...textStyle } = textStyles.TEXT_STYLE_7;

export const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: headerStyle.headerStyle.backgroundColor,
    elevation: 3,
  },
  tabText: {
    ...textStyle,
  },
  indicator: {
    backgroundColor: colors.MACARONI_AND_CHEESE,
  },
});

export const activeTintColor = colors.WHITE;

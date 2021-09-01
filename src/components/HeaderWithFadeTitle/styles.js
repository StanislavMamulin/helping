import { StyleSheet } from 'react-native';
import { headerStyle } from '../../navigation/styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  titleText: {
    ...headerStyle.headerTitleStyle,
    color: headerStyle.headerTintColor,
    textAlign: 'left',
  },
  textFade: {
    height: 32,
    width: 24,
    right: 0,
    position: 'absolute',
  },
});

export const fadeColors = [
  'transparent',
  headerStyle.headerStyle.backgroundColor,
];

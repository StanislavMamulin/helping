import { StyleSheet } from 'react-native';
import { headerStyle } from '../../navigation/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitle: {
    ...headerStyle.headerTitleStyle,
    color: headerStyle.headerTintColor,
  },
});

export default styles;

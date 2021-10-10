import { StyleSheet } from 'react-native';
import { textStyles } from '../../commonStyles/text';

export const styles = StyleSheet.create({
  container: {
    padding: 21,
    paddingBottom: 0,
  },
  text: {
    ...textStyles.TEXT_STYLE,
  },
});

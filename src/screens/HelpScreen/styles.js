import { StyleSheet } from 'react-native';
import { textStyles } from '../../commonStyles/text';

export const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    marginTop: 11,
    marginBottom: 20,

    ...textStyles.TEXT_STYLE_5,
  },
});

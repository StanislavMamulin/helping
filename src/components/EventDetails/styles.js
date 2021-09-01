import { StyleSheet } from 'react-native';
import { textStyles } from '../../commonStyles/text';

const styles = StyleSheet.create({
  infoContainer: {
    paddingTop: 16,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    ...textStyles.TEXT_STYLE_DETAILS_TITLE,
    marginBottom: 10,
  },
  description: {
    marginBottom: 20,
  },
  link: {
    ...textStyles.TEXT_STYLE_LINK,
    marginBottom: 30,
  },
  dateContaier: {
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
  },
  dateText: {
    color: '#94998a',
  },
  dateIcon: {
    tintColor: '#94998a',
  },
});

export default styles;

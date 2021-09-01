import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexBasis: 70,

    backgroundColor: 'white',
    borderTopColor: '#d8d8d8',
    borderTopWidth: 1,
  },
  separator: {
    width: 1,
    height: 70,
    opacity: 0.45,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default styles;

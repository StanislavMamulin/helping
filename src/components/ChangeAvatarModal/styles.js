import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.56)',
  },
  container: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 2,

    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 28,

    elevation: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
  },
  separator: {
    marginBottom: 44,
  },
});

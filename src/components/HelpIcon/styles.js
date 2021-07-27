import { StyleSheet } from 'react-native';
import { tabbar } from '../../commonStyles/colors';

const HEART_COLOR = '#fe7460';

const styles = focused =>
  StyleSheet.create({
    helpIconOutter: {
      height: 54,
      width: 54,
      backgroundColor: 'white',
      borderRadius: 27,

      justifyContent: 'center',
      alignItems: 'center',

      position: 'absolute',
      bottom: -1,
    },
    helpIconInner: {
      height: 42,
      width: 42,
      borderRadius: 21,
      borderColor: tabbar.activeTintColor,
      borderWidth: focused ? 2 : 0,
      backgroundColor: focused ? 'white' : HEART_COLOR,

      justifyContent: 'center',
      alignItems: 'center',
    },
    helpIcon: {
      width: focused ? 40 : 24,
      height: focused ? 40 : 24,
      tintColor: focused ? HEART_COLOR : 'white',
    },
    helpIconShadow: {
      height: 28,
      width: 54,

      tintColor: '#e1e1e1',
      resizeMode: 'contain',

      position: 'absolute',
      top: -1,
    },
  });

export default styles;

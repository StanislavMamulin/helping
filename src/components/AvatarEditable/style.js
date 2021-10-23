import { StyleSheet } from 'react-native';
import { textStyles } from '../../commonStyles/text';

export const styles = StyleSheet.create({
  textUnderlay: {
    height: '30%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.56)',
    position: 'absolute',
    bottom: 0,

    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...textStyles.TEXT_STYLE_9,
    textAlign: 'center',
  },
});

export const avatarStyle = size =>
  StyleSheet.create({
    container: {
      height: size,
      width: size,

      borderRadius: size / 2,
      overflow: 'hidden',
    },
    avatar: {
      height: size,
      width: size,
    },
  });
